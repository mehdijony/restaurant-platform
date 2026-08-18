// services/catalog-service/src/categories/categories.service.ts
import {
  Injectable,
  NotFoundException,
  Logger,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CatalogEventsPublisher } from '../events/catalog-events.publisher';
import { MenuCacheService } from '../cache/menu-cache.service';
import { CatalogEvent } from '../events/catalog-events.enum';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import type { Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: CatalogEventsPublisher,
    private readonly cache: MenuCacheService,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    const category = await this.prisma.category.create({
      data: {
        restaurantId: dto.restaurantId,
        branchId: dto.branchId,
        name: dto.name,
        description: dto.description,
        imageUrl: dto.imageUrl,
        sortOrder: dto.sortOrder ?? 0,
        isActive: dto.isActive ?? true,
      },
    });

    await this.events.publish(CatalogEvent.CATEGORY_CREATED, dto.restaurantId, {
      categoryId: category.id,
      name: category.name,
      restaurantId: dto.restaurantId,
    });
    await this.cache.invalidateMenu(dto.restaurantId, dto.branchId);

    this.logger.log(`Category created: ${category.id}`);
    return category;
  }

  async findAll(restaurantId: string, branchId?: string): Promise<Category[]> {
    return this.prisma.category.findMany({
      where: {
        restaurantId,
        ...(branchId ? { OR: [{ branchId }, { branchId: null }] } : {}),
        isActive: true,
      },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async findOne(id: string, restaurantId: string): Promise<Category> {
    const category = await this.prisma.category.findFirst({
      where: { id, restaurantId },
    });
    if (!category) throw new NotFoundException(`Category ${id} not found`);
    return category;
  }

  async update(
    id: string,
    restaurantId: string,
    dto: UpdateCategoryDto,
  ): Promise<Category> {
    await this.findOne(id, restaurantId);

    const updated = await this.prisma.category.update({
      where: { id },
      data: dto,
    });

    await this.events.publish(CatalogEvent.CATEGORY_UPDATED, restaurantId, {
      categoryId: id,
      name: updated.name,
      restaurantId,
    });
    await this.cache.invalidateMenu(restaurantId, updated.branchId);

    return updated;
  }

  async remove(id: string, restaurantId: string): Promise<void> {
    const category = await this.findOne(id, restaurantId);

    // check no active items exist
    const itemCount = await this.prisma.menuItem.count({
      where: { categoryId: id, isActive: true },
    });
    if (itemCount > 0) {
      throw new ConflictException(
        `Cannot delete category with ${itemCount} active items`,
      );
    }

    await this.prisma.category.delete({ where: { id } });

    await this.events.publish(CatalogEvent.CATEGORY_DELETED, restaurantId, {
      categoryId: id,
      name: category.name,
      restaurantId,
    });
    await this.cache.invalidateMenu(restaurantId, category.branchId);
  }
}
