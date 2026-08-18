// services/catalog-service/src/graphql/models/modifier-group.model.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { ModifierOptionModel } from './modifier-option.model';

@ObjectType()
export class ModifierGroupModel {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  isRequired!: boolean;

  @Field(() => Int)
  minSelections!: number;

  @Field(() => Int)
  maxSelections!: number;

  @Field()
  isActive!: boolean;

  @Field(() => [ModifierOptionModel])
  options!: ModifierOptionModel[];
}
