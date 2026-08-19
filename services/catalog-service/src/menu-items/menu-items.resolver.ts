import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { MenuItemsService } from './menu-items.service';
import { MenuItemModel } from '../graphql/models/menu-item.model';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Resolver(() => MenuItemModel)
@UseGuards(JwtAuthGuard)
export class MenuItemsResolver {
  private readonly logger = new Logger(MenuItemsResolver.name);
  constructor(private readonly service: MenuItemsService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => [MenuItemModel], { name: 'menuItems' })
  async findAll(
    @Args('restaurantId') restaurantId: string,
    @Args('branchId', { nullable: true }) branchId?: string,
  ): Promise<MenuItemModel[]> {
    this.logger?.log(`menuItems resolver called with restaurantId=${restaurantId}, branchId=${branchId}`);
    const rawItems = await this.service.findAll(restaurantId, branchId);
    const mapped = rawItems.map(item => this.mapItem(item));
    this.logger?.log(`Returning ${mapped.length} menu items`);
    return mapped;
  }

  @Query(() => MenuItemModel, { name: 'menuItem' })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ): Promise<MenuItemModel> {
    this.logger?.log(`menuItem findOne called with id=${id}, restaurantId=${restaurantId}`);
    const raw = await this.service.findOne(id, restaurantId);
    return this.mapItem(raw);
  }

  private mapItem(raw: any): MenuItemModel {
    // Flatten modifier groups structure returned by Prisma
    const modifierGroups = (raw.modifierGroups ?? []).map((mg: any) => {
      const group = mg.modifierGroup ?? {};
      return {
        id: group.id,
        name: group.name,
        description: group.description,
        isRequired: group.isRequired,
        minSelections: group.minSelections,
        maxSelections: group.maxSelections,
        isActive: group.isActive,
        options: (group.options ?? []).map((opt: any) => ({
          id: opt.id,
          name: opt.name,
          additionalPrice: opt.additionalPrice,
          isActive: opt.isActive,
          isDefault: opt.isDefault,
          sortOrder: opt.sortOrder,
        })),
      };
    });

    return {
      id: raw.id,
      name: raw.name,
      description: raw.description,
      imageUrl: raw.imageUrl,
      sku: raw.sku,
      isActive: raw.isActive,
      sortOrder: raw.sortOrder,
      preparationTime: raw.preparationTime,
      calories: raw.calories,
      tags: raw.tags ?? [],
      prices: raw.prices ?? [],
      modifierGroups,
    } as any;
  }

  // Additional queries can be added here
}
