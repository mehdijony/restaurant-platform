// services/catalog-service/src/modifiers/modifiers.service.ts
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CatalogEventsPublisher } from '../events/catalog-events.publisher';
import { MenuCacheService } from '../cache/menu-cache.service';
import { CatalogEvent } from '../events/catalog-events.enum';
import {
  CreateModifierGroupDto,
  CreateModifierOptionDto,
} from './dto/create-modifier-group.dto';
import Decimal from 'decimal.js';

@Injectable()
export class ModifiersService {
  private readonly logger = new Logger(ModifiersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: CatalogEventsPublisher,
    private readonly cache: MenuCacheService,
  ) {}

  async createGroup(dto: CreateModifierGroupDto) {
    const group = await this.prisma.modifierGroup.create({
      data: {
        restaurantId: dto.restaurantId,
        name: dto.name,
        description: dto.description,
        isRequired: dto.isRequired ?? false,
        minSelections: dto.minSelections ?? 0,
        maxSelections: dto.maxSelections ?? 1,
        options: dto.options
          ? {
              createMany: {
                data: dto.options.map((o) => ({
                  name: o.name,
                  additionalPrice: new Decimal(o.additionalPrice ?? '0'),
                  isDefault: o.isDefault ?? false,
                  sortOrder: o.sortOrder ?? 0,
                })),
              },
            }
          : undefined,
      },
      include: { options: true },
    });

    await this.events.publish(
      CatalogEvent.MODIFIER_GROUP_CREATED,
      dto.restaurantId,
      {
        modifierGroupId: group.id,
        name: group.name,
        restaurantId: dto.restaurantId,
      },
    );

    return group;
  }

  async findAllGroups(restaurantId: string) {
    return this.prisma.modifierGroup.findMany({
      where: { restaurantId, isActive: true },
      include: {
        options: { where: { isActive: true }, orderBy: { sortOrder: 'asc' } },
      },
    });
  }

  async findOneGroup(id: string, restaurantId: string) {
    const group = await this.prisma.modifierGroup.findFirst({
      where: { id, restaurantId },
      include: { options: { orderBy: { sortOrder: 'asc' } } },
    });
    if (!group) throw new NotFoundException(`ModifierGroup ${id} not found`);
    return group;
  }

  async addOption(
    groupId: string,
    restaurantId: string,
    dto: CreateModifierOptionDto,
  ) {
    await this.findOneGroup(groupId, restaurantId);
    return this.prisma.modifierOption.create({
      data: {
        modifierGroupId: groupId,
        name: dto.name,
        additionalPrice: new Decimal(dto.additionalPrice ?? '0'),
        isDefault: dto.isDefault ?? false,
        sortOrder: dto.sortOrder ?? 0,
      },
    });
  }

  async removeOption(
    groupId: string,
    optionId: string,
    restaurantId: string,
  ): Promise<void> {
    await this.findOneGroup(groupId, restaurantId);
    await this.prisma.modifierOption.delete({ where: { id: optionId } });
    await this.cache.invalidateMenu(restaurantId);
  }

  async deleteGroup(id: string, restaurantId: string): Promise<void> {
    const group = await this.findOneGroup(id, restaurantId);
    await this.prisma.modifierGroup.delete({ where: { id } });
    await this.events.publish(
      CatalogEvent.MODIFIER_GROUP_DELETED,
      restaurantId,
      { modifierGroupId: id, name: group.name, restaurantId },
    );
    await this.cache.invalidateMenu(restaurantId);
  }
}
