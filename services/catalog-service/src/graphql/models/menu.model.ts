// services/catalog-service/src/graphql/models/menu.model.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CategoryModel } from './category.model';

@ObjectType()
export class MenuSectionModel {
  @Field(() => ID)
  id!: string;

  @Field(() => CategoryModel)
  category!: CategoryModel;

  @Field(() => [MenuItemModel])
  items!: import('./menu-item.model').MenuItemModel[];
}

import { MenuItemModel } from './menu-item.model';

@ObjectType()
export class MenuModel {
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
  status!: string;

  @Field({ nullable: true })
  publishedAt?: Date;

  @Field(() => [MenuSectionModel])
  sections!: MenuSectionModel[];
}
