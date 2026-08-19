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
    this.logger?.log(`Returning empty array`);
    return this.service.findAll(restaurantId, branchId);
  }

  // Additional queries like findOne can be added here
}
