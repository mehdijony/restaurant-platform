// services/inventory-service/src/suppliers/suppliers.resolver.ts
import { Resolver, Query, Args, ID, ObjectType, Field } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@ObjectType()
export class SupplierModel {
  @Field(() => ID) id!: string;
  @Field() restaurantId!: string;
  @Field() name!: string;
  @Field({ nullable: true }) contactName?: string;
  @Field({ nullable: true }) email?: string;
  @Field({ nullable: true }) phone?: string;
  @Field({ nullable: true }) address?: string;
  @Field() isActive!: boolean;
  @Field() createdAt!: Date;
}

@Resolver(() => SupplierModel)
@UseGuards(JwtAuthGuard)
export class SuppliersResolver {
  constructor(private readonly svc: SuppliersService) {}

  @Query(() => [SupplierModel], { name: 'suppliers' })
  findAll(@Args('restaurantId') restaurantId: string) {
    return this.svc.findAll(restaurantId);
  }

  @Query(() => SupplierModel, { name: 'supplier' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }
}
