import { Resolver, Query, Mutation, Args, ID, ObjectType, Field } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';

@ObjectType()
class WarehouseModel {
  @Field(() => ID)
  id!: string;

  @Field()
  restaurantId!: string;

  @Field({ nullable: true })
  branchId?: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  isActive!: boolean;
}

@Resolver(() => WarehouseModel)
@UseGuards(JwtAuthGuard)
export class WarehousesResolver {
  constructor(private readonly svc: WarehousesService) {}

  @Query(() => [WarehouseModel], { name: 'warehouses' })
  findAll(
    @Args('restaurantId') restaurantId: string,
    @Args('branchId', { nullable: true }) branchId?: string,
  ) {
    return this.svc.findAll(restaurantId, branchId);
  }

  @Query(() => WarehouseModel, { name: 'warehouse' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }

  @Mutation(() => WarehouseModel, { name: 'createWarehouse' })
  create(@Args('dto', { type: () => CreateWarehouseDto }) dto: CreateWarehouseDto) {
    return this.svc.create(dto);
  }}
