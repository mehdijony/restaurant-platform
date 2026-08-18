// services/catalog-service/src/menus/menus.resolver.ts
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenuModel } from '../graphql/models/menu.model';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Resolver(() => MenuModel)
@UseGuards(JwtAuthGuard)
export class MenusResolver {
  constructor(private readonly service: MenusService) {}

  @Query(() => [MenuModel], { name: 'menus' })
  findAll(
    @Args('restaurantId') restaurantId: string,
    @Args('branchId', { nullable: true }) branchId?: string,
  ) {
    return this.service.findAll(restaurantId, branchId);
  }

  @Query(() => MenuModel, { name: 'menu', nullable: true })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.service.findOne(id, restaurantId);
  }

  @Query(() => MenuModel, { name: 'publishedMenu', nullable: true })
  getPublished(
    @Args('restaurantId') restaurantId: string,
    @Args('branchId', { nullable: true }) branchId?: string,
  ) {
    return this.service.getPublishedMenu(restaurantId, branchId);
  }
}
