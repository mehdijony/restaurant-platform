// services/catalog-service/src/items/items.service.ts
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CatalogEventsPublisher } from '../events/catalog-events.publisher';
import { MenuCacheService } from '../cache/menu-cache.service';
import { CatalogEvent } from '../events/catalog-events.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import type { MenuItem } from '@prisma/client';

@Injectable()
export class ItemsService {
  private readonly logger = new Logger(ItemsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: CatalogEventsPublisher,
    private readonly cache: MenuCacheService,
  ) {}

  async create(dto: CreateItemDto): Promise<MenuItem> {
    const item = await this.prisma.menuItem.create({
      data: {
        restaurantId: dto.restaurantId,
        categoryId: dto.categoryId,
        name: dto.name,
        description: dto.description,
        sku: dto.sku,
        imageUrl: dto.imageUrl,
        sortOrder: dto.sortOrder ?? 0,
        preparationTime: dto.preparationTime,
        calories: dto.calories,
        tags: dto.tags ?? [],
        isActive: dto.isActive ?? true,
      },
      include: {
        prices: true,
        modifierGroups: {
          include: { modifierGroup: { include: { options: true } } },
        },
      },
    });

    await this.events.publish(CatalogEvent.ITEM_CREATED, dto.restaurantId, {
      itemId: item.id,
      name: item.name,
      categoryId: item.categoryId,
      restaurantId: dto.restaurantId,
    });
    await this.cache.invalidateMenu(dto.restaurantId);

    this.logger.log(`MenuItem created: ${item.id}`);
    return item;
  }

  async findAll(
    restaurantId: string,
    categoryId?: string,
  ): Promise<MenuItem[]> {
    return this.prisma.menuItem.findMany({
      where: {
        restaurantId,
        ...(categoryId ? { categoryId } : {}),
        isActive: true,
      },
      include: {
        prices: true,
        modifierGroups: {
          include: { modifierGroup: { include: { options: true } } },
        },
      },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findOne(id: string, restaurantId: string): Promise<MenuItem> {
    const item = await this.prisma.menuItem.findFirst({
      where: { id, restaurantId },
      include: {
        prices: true,
        availability: true,
        modifierGroups: {
          include: {
            modifierGroup: {
              include: { options: { orderBy: { sortOrder: 'asc' } } },
            },
          },
          orderBy: { sortOrder: 'asc' },
        },
      },
    });
    if (!item) throw new NotFoundException(`MenuItem ${id} not found`);
    return item;
  }

  async update(
    id: string,
    restaurantId: string,
    dto: UpdateItemDto,
  ): Promise<MenuItem> {
    await this.findOne(id, restaurantId);

    const { restaurantId: _r, ...updateData } = dto;

    const updated = await this.prisma.menuItem.update({
      where: { id },
      data: updateData,
      include: { prices: true },
    });

    const wasAvailabilityChange = 'isActive' in dto;

    await this.events.publish(
      wasAvailabilityChange
        ? CatalogEvent.ITEM_AVAILABILITY_CHANGED
        : CatalogEvent.ITEM_UPDATED,
      restaurantId,
      {
        itemId: id,
        name: updated.name,
        categoryId: updated.categoryId,
        restaurantId,
        isActive: updated.isActive,
      },
    );
    await this.cache.invalidateMenu(restaurantId);

    return updated;
  }

  async remove(id: string, restaurantId: string): Promise<void> {
    const item = await this.findOne(id, restaurantId);
    await this.prisma.menuItem.delete({ where: { id } });

    await this.events.publish(CatalogEvent.ITEM_DELETED, restaurantId, {
      itemId: id,
      name: item.name,
      categoryId: item.categoryId,
      restaurantId,
    });
    await this.cache.invalidateMenu(restaurantId);
  }

  async attachModifierGroup(
    itemId: string,
    restaurantId: string,
    modifierGroupId: string,
    sortOrder = 0,
  ): Promise<void> {
    await this.findOne(itemId, restaurantId);
    await this.prisma.menuItemModifierGroup.upsert({
      where: {
        menuItemId_modifierGroupId: { menuItemId: itemId, modifierGroupId },
      },
      create: { menuItemId: itemId, modifierGroupId, sortOrder },
      update: { sortOrder },
    });
    await this.cache.invalidateMenu(restaurantId);
  }

  async detachModifierGroup(
    itemId: string,
    restaurantId: string,
    modifierGroupId: string,
  ): Promise<void> {
    await this.findOne(itemId, restaurantId);
    await this.prisma.menuItemModifierGroup.delete({
      where: {
        menuItemId_modifierGroupId: { menuItemId: itemId, modifierGroupId },
      },
    });
    await this.cache.invalidateMenu(restaurantId);
  }
}
