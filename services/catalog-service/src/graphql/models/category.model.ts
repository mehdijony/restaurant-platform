// services/catalog-service/src/graphql/models/category.model.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { MenuItemModel } from './menu-item.model';

@ObjectType()
export class CategoryModel {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field(() => Int)
  sortOrder!: number;

  @Field()
  isActive!: boolean;

  @Field(() => [MenuItemModel], { nullable: true })
  items?: MenuItemModel[];
}
