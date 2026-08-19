// services/inventory-service/src/ingredients/ingredients.service.ts
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InventoryEventsPublisher } from '../events/inventory-events.publisher';
import { InventoryEvent } from '../events/inventory-events.enum';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import Decimal from 'decimal.js';

@Injectable()
export class IngredientsService {
  private readonly logger = new Logger(IngredientsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: InventoryEventsPublisher,
  ) {}

  async create(dto: CreateIngredientDto) {
    const ingredient = await this.prisma.ingredient.create({
      data: {
        restaurantId: dto.restaurantId,
        name: dto.name,
        description: dto.description,
        unitId: dto.unitId,
        sku: dto.sku,
        barcode: dto.barcode,
        reorderPoint: new Decimal(dto.reorderPoint ?? '0'),
        reorderQuantity: new Decimal(dto.reorderQuantity ?? '0'),
        isActive: dto.isActive ?? true,
      },
      include: { unit: true },
    });

    await this.events.publish(
      InventoryEvent.INGREDIENT_CREATED,
      dto.restaurantId,
      { ingredientId: ingredient.id, name: ingredient.name },
    );

    this.logger.log(`Ingredient created: ${ingredient.id}`);
    return ingredient;
  }

  findAll(restaurantId: string) {
    return this.prisma.ingredient.findMany({
      where: { restaurantId, isActive: true },
      include: { unit: true },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string, restaurantId: string) {
    const ing = await this.prisma.ingredient.findFirst({
      where: { id, restaurantId },
      include: { unit: true, stockLevels: { include: { warehouse: true } } },
    });
    if (!ing) throw new NotFoundException(`Ingredient ${id} not found`);
    return ing;
  }

  async update(id: string, restaurantId: string, dto: UpdateIngredientDto) {
    await this.findOne(id, restaurantId);

    const { restaurantId: _r, ...data } = dto;
    const updated = await this.prisma.ingredient.update({
      where: { id },
      data: {
        ...data,
        ...(dto.reorderPoint
          ? { reorderPoint: new Decimal(dto.reorderPoint) }
          : {}),
        ...(dto.reorderQuantity
          ? { reorderQuantity: new Decimal(dto.reorderQuantity) }
          : {}),
      },
      include: { unit: true },
    });

    await this.events.publish(InventoryEvent.INGREDIENT_UPDATED, restaurantId, {
      ingredientId: id,
      name: updated.name,
    });

    return updated;
  }

  async deactivate(id: string, restaurantId: string) {
    await this.findOne(id, restaurantId);
    return this.prisma.ingredient.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
