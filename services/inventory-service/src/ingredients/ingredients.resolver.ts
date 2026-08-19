// services/inventory-service/src/ingredients/ingredients.resolver.ts
import {
  Resolver,
  Query,
  Args,
  ID,
  ObjectType,
  Field,
  Int,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ObjectType()
class UnitRef {
  @Field(() => ID) id!: string;
  @Field() name!: string;
  @Field() abbreviation!: string;
}

@ObjectType()
class StockLevelRef {
  @Field() warehouseId!: string;
  @Field() quantity!: string;
  @Field() reservedQty!: string;
}

@ObjectType()
export class IngredientModel {
  @Field(() => ID) id!: string;
  @Field() restaurantId!: string;
  @Field() name!: string;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) sku?: string;
  @Field() reorderPoint!: string;
  @Field() reorderQuantity!: string;
  @Field() isActive!: boolean;
  @Field(() => UnitRef) unit!: UnitRef;
  @Field(() => [StockLevelRef]) stockLevels!: StockLevelRef[];
}

@Resolver(() => IngredientModel)
@UseGuards(JwtAuthGuard)
export class IngredientsResolver {
  constructor(private readonly svc: IngredientsService) {}

  @Query(() => [IngredientModel], { name: 'ingredients' })
  findAll(@Args('restaurantId') restaurantId: string) {
    return this.svc.findAll(restaurantId);
  }

  @Query(() => IngredientModel, { name: 'ingredient' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }
}
