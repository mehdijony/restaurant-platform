// services/catalog-service/src/graphql/models/menu-item.model.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { PriceModel } from './price.model';
import { ModifierGroupModel } from './modifier-group.model';

@ObjectType()
export class MenuItemModel {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field({ nullable: true })
  sku?: string;

  @Field()
  isActive!: boolean;

  @Field(() => Int)
  sortOrder!: number;

  @Field(() => Int, { nullable: true })
  preparationTime?: number;

  @Field(() => Int, { nullable: true })
  calories?: number;

  @Field(() => [String])
  tags!: string[];

  @Field(() => [PriceModel])
  prices!: PriceModel[];

  @Field(() => [ModifierGroupModel])
  modifierGroups!: ModifierGroupModel[];
}
