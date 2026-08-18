// services/catalog-service/src/graphql/models/modifier-option.model.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class ModifierOptionModel {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  additionalPrice!: string; // Decimal as string

  @Field()
  isDefault!: boolean;

  @Field()
  isActive!: boolean;

  @Field(() => Int)
  sortOrder!: number;
}
