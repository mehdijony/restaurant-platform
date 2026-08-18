// services/catalog-service/src/items/items.resolver.ts
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { MenuItemModel } from '../graphql/models/menu-item.model';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Resolver(() => MenuItemModel)
@UseGuards(JwtAuthGuard)
export class ItemsResolver {
  constructor(private readonly service: ItemsService) {}

  @Query(() => [MenuItemModel], { name: 'menuItems' })
  findAll(
    @Args('restaurantId') restaurantId: string,
    @Args('categoryId', { nullable: true }) categoryId?: string,
  ) {
    return this.service.findAll(restaurantId, categoryId);
  }

  @Query(() => MenuItemModel, { name: 'menuItem' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.service.findOne(id, restaurantId);
  }
}
