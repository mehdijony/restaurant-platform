// services/catalog-service/src/modifiers/modifiers.resolver.ts
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ModifiersService } from './modifiers.service';
import { ModifierGroupModel } from '../graphql/models/modifier-group.model';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Resolver(() => ModifierGroupModel)
@UseGuards(JwtAuthGuard)
export class ModifiersResolver {
  constructor(private readonly service: ModifiersService) {}

  @Query(() => [ModifierGroupModel], { name: 'modifierGroups' })
  findAll(@Args('restaurantId') restaurantId: string) {
    return this.service.findAllGroups(restaurantId);
  }

  @Query(() => ModifierGroupModel, { name: 'modifierGroup' })
  findOne(
    @Args('id', { type: () => ID }) id: string,
    @Args('restaurantId') restaurantId: string,
  ) {
    return this.service.findOneGroup(id, restaurantId);
  }
}
