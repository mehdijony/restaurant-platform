// services/inventory-service/src/movements/movements.resolver.ts
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
import { MovementsService } from './movements.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ObjectType()
class MovementLineModel {
  @Field(() => ID) id!: string;
  @Field() ingredientId!: string;
  @Field() quantity!: string;
  @Field({ nullable: true }) unitCost?: string;
  @Field({ nullable: true }) notes?: string;
}

@ObjectType()
export class StockMovementModel {
  @Field(() => ID) id!: string;
  @Field() restaurantId!: string;
  @Field() type!: string;
  @Field() status!: string;
  @Field({ nullable: true }) fromWarehouseId?: string;
  @Field({ nullable: true }) toWarehouseId?: string;
  @Field({ nullable: true }) notes?: string;
  @Field() createdAt!: Date;
  @Field(() => [MovementLineModel]) lines!: MovementLineModel[];
}

@Resolver(() => StockMovementModel)
@UseGuards(JwtAuthGuard)
export class MovementsResolver {
  constructor(private readonly svc: MovementsService) {}

  @Query(() => [StockMovementModel], { name: 'stockMovements' })
  findAll(
    @Args('restaurantId') restaurantId: string,
    @Args('type', { nullable: true }) type?: string,
    @Args('warehouseId', { nullable: true }) warehouseId?: string,
    @Args('limit', { type: () => Int, nullable: true, defaultValue: 50 })
    limit?: number,
    @Args('offset', { type: () => Int, nullable: true, defaultValue: 0 })
    offset?: number,
  ) {
    return this.svc.findAll(restaurantId, type, warehouseId, limit, offset);
  }

  @Query(() => StockMovementModel, { name: 'stockMovement' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }
}
