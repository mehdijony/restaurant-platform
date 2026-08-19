// services/catalog-service/src/categories/categories.resolver.ts
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryModel } from '../graphql/models/category.model';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Resolver(() => CategoryModel)
// @UseGuards(JwtAuthGuard)
export class CategoriesResolver {
  private readonly logger = new Logger(CategoriesResolver.name);
  constructor(private readonly service: CategoriesService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => [CategoryModel], { name: 'categories' })
  async findAll(
    @Args('restaurantId') restaurantId: string,
    @Args('branchId', { nullable: true }) branchId?: string,
  ): Promise<CategoryModel[]> {
    this.logger?.log('Categories resolver invoked');
    const categories = await this.service.findAll(restaurantId, branchId);
    this.logger?.log(`Categories found: ${categories.length}`);
    this.logger?.log(
      `Categories type: ${typeof categories}, isArray: ${Array.isArray(categories)}`,
    );
    this.logger?.log('Categories payload: ' + JSON.stringify(categories));
    this.logger?.log(
      `Raw return type constructor: ${categories?.constructor?.name}`,
    );
    this.logger?.log(`Is plain array: ${Array.isArray(categories)}`);
    this.logger?.log(`Keys if object: ${Object.keys(categories)}`);
    return categories;
  }

  @Query(() => CategoryModel, { name: 'category' })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.service.findOne(id, restaurantId);
  }
}
