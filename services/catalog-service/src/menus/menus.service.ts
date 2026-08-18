// services/catalog-service/src/menus/menus.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CatalogEventsPublisher } from '../events/catalog-events.publisher';
import { MenuCacheService } from '../cache/menu-cache.service';
import { CatalogEvent } from '../events/catalog-events.enum';
import { CreateMenuDto } from './dto/create-menu.dto';
import { MenuStatus } from '@prisma/client';

@Injectable()
export class MenusService {
  private readonly logger = new Logger(MenusService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: CatalogEventsPublisher,
    private readonly cache: MenuCacheService,
  ) {}

  async create(dto: CreateMenuDto) {
    const menu = await this.prisma.menu.create({
      data: {
        restaurantId: dto.restaurantId,
        branchId: dto.branchId,
        name: dto.name,
        description: dto.description,
        status: MenuStatus.DRAFT,
        sections: dto.sections
          ? {
              create: dto.sections.map((s, i) => ({
                categoryId: s.categoryId,
                sortOrder: s.sortOrder ?? i,
                items: s.items
                  ? {
                      create: s.items.map((it, j) => ({
                        menuItemId: it.menuItemId,
                        sortOrder: it.sortOrder ?? j,
                      })),
                    }
                  : undefined,
              })),
            }
          : undefined,
      },
      include: this.fullInclude(),
    });

    await this.events.publish(CatalogEvent.MENU_CREATED, dto.restaurantId, {
      menuId: menu.id,
      restaurantId: dto.restaurantId,
      branchId: dto.branchId,
      status: menu.status,
    });

    return menu;
  }

  async findAll(restaurantId: string, branchId?: string) {
    return this.prisma.menu.findMany({
      where: {
        restaurantId,
        ...(branchId ? { OR: [{ branchId }, { branchId: null }] } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, restaurantId: string) {
    const menu = await this.prisma.menu.findFirst({
      where: { id, restaurantId },
      include: this.fullInclude(),
    });
    if (!menu) throw new NotFoundException(`Menu ${id} not found`);
    return menu;
  }

  async publish(id: string, restaurantId: string) {
    const menu = await this.findOne(id, restaurantId);

    if (menu.status === MenuStatus.ARCHIVED) {
      throw new BadRequestException('Cannot publish an archived menu');
    }

    const updated = await this.prisma.menu.update({
      where: { id },
      data: { status: MenuStatus.PUBLISHED, publishedAt: new Date() },
      include: this.fullInclude(),
    });

    // Cache the published menu
    await this.cache.setPublishedMenu(restaurantId, updated, menu.branchId);

    await this.events.publish(CatalogEvent.MENU_PUBLISHED, restaurantId, {
      menuId: id,
      restaurantId,
      branchId: menu.branchId,
      status: MenuStatus.PUBLISHED,
    });

    this.logger.log(`Menu published: ${id}`);
    return updated;
  }

  async archive(id: string, restaurantId: string) {
    const menu = await this.findOne(id, restaurantId);

    const updated = await this.prisma.menu.update({
      where: { id },
      data: { status: MenuStatus.ARCHIVED, archivedAt: new Date() },
    });

    await this.cache.invalidateMenu(restaurantId, menu.branchId);

    await this.events.publish(CatalogEvent.MENU_ARCHIVED, restaurantId, {
      menuId: id,
      restaurantId,
      branchId: menu.branchId,
      status: MenuStatus.ARCHIVED,
    });

    return updated;
  }

  async getPublishedMenu(restaurantId: string, branchId?: string) {
    // Try cache first
    const cached = await this.cache.getPublishedMenu(restaurantId, branchId);
    if (cached) return cached;

    // Fall back to DB
    const menu = await this.prisma.menu.findFirst({
      where: {
        restaurantId,
        status: MenuStatus.PUBLISHED,
        ...(branchId ? { OR: [{ branchId }, { branchId: null }] } : {}),
      },
      orderBy: { publishedAt: 'desc' },
      include: this.fullInclude(),
    });

    if (menu) {
      await this.cache.setPublishedMenu(restaurantId, menu, branchId);
    }

    return menu;
  }

  private fullInclude() {
    return {
      sections: {
        orderBy: { sortOrder: 'asc' as const },
        include: {
          category: true,
          items: {
            orderBy: { sortOrder: 'asc' as const },
            include: {
              menuItem: {
                include: {
                  prices: true,
                  modifierGroups: {
                    include: {
                      modifierGroup: {
                        include: {
                          options: { orderBy: { sortOrder: 'asc' as const } },
                        },
                      },
                    },
                    orderBy: { sortOrder: 'asc' as const },
                  },
                },
              },
            },
          },
        },
      },
    };
  }
}
