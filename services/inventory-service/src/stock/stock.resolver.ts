// services/inventory-service/src/stock/stock.resolver.ts
import { Resolver, Query, Args, ObjectType, Field, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { StockService } from './stock.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ObjectType()
class IngredientRef {
  @Field(() => ID) id!: string;
  @Field() name!: string;
  @Field() restaurantId!: string;
}

@ObjectType()
class WarehouseRef {
  @Field(() => ID) id!: string;
  @Field() name!: string;
}

@ObjectType()
export class StockLevelModel {
  @Field(() => ID) id!: string;
  @Field() ingredientId!: string;
  @Field() warehouseId!: string;
  @Field() quantity!: string;
  @Field() reservedQty!: string;
  @Field(() => IngredientRef) ingredient!: IngredientRef;
  @Field(() => WarehouseRef) warehouse!: WarehouseRef;
}

@Resolver(() => StockLevelModel)
@UseGuards(JwtAuthGuard)
export class StockResolver {
  constructor(private readonly svc: StockService) {}

  @Query(() => [StockLevelModel], { name: 'stockLevels' })
  getLevels(
    @Args('restaurantId') restaurantId: string,
    @Args('warehouseId', { nullable: true }) warehouseId?: string,
    @Args('ingredientId', { nullable: true }) ingredientId?: string,
  ) {
    return this.svc.getStockLevels(restaurantId, warehouseId, ingredientId);
  }
}
