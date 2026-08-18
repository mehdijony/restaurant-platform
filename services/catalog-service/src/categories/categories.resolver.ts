// services/catalog-service/src/categories/categories.resolver.ts
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryModel } from '../graphql/models/category.model';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Resolver(() => CategoryModel)
@UseGuards(JwtAuthGuard)
export class CategoriesResolver {
  constructor(private readonly service: CategoriesService) {}

  @Query(() => [CategoryModel], { name: 'categories' })
  async findAll(
    @Args('restaurantId') restaurantId: string,
    @Args('branchId', { nullable: true }) branchId?: string,
  ) {
    return this.service.findAll(restaurantId, branchId);
  }

  @Query(() => CategoryModel, { name: 'category' })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.service.findOne(id, restaurantId);
  }
}
