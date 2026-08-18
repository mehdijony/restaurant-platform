// services/catalog-service/src/graphql/models/price.model.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PriceModel {
  @Field(() => ID)
  id!: string;

  @Field()
  menuItemId!: string;

  @Field({ nullable: true })
  branchId?: string;

  @Field({ nullable: true })
  label?: string;

  @Field()
  amount!: string; // serialized Decimal

  @Field()
  currency!: string;

  @Field()
  isDefault!: boolean;
}
