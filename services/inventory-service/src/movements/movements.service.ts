// services/inventory-service/src/movements/movements.service.ts
import {
  Injectable,
  Logger,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StockService } from '../stock/stock.service';
import { InventoryEventsPublisher } from '../events/inventory-events.publisher';
import { InventoryEvent } from '../events/inventory-events.enum';
import { CreateReceiptDto } from './dto/receipt.dto';
import { CreateAdjustmentDto } from './dto/adjustment.dto';
import { CreateTransferDto } from './dto/transfer.dto';
import { CreateWasteDto } from './dto/waste.dto';
import Decimal from 'decimal.js';
import { MovementType, MovementStatus } from '@prisma/client';

@Injectable()
export class MovementsService {
  private readonly logger = new Logger(MovementsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly stock: StockService,
    private readonly events: InventoryEventsPublisher,
  ) {}

  // ── Purchase Receipt ──────────────────────────────────────────────────────

  async createReceipt(dto: CreateReceiptDto, performedById?: string) {
    // Create movement + receipt in a transaction
    const result = await this.prisma.$transaction(async (tx) => {
      const movement = await tx.stockMovement.create({
        data: {
          restaurantId: dto.restaurantId,
          type: MovementType.RECEIPT,
          status: MovementStatus.CONFIRMED,
          toWarehouseId: dto.warehouseId,
          notes: dto.notes,
          performedById,
          confirmedAt: new Date(),
          lines: {
            create: dto.lines.map((l) => ({
              ingredientId: l.ingredientId,
              quantity: new Decimal(l.quantity),
              unitCost: l.unitCost ? new Decimal(l.unitCost) : undefined,
              notes: l.lotNumber,
            })),
          },
        },
        include: { lines: true },
      });

      await tx.purchaseReceipt.create({
        data: {
          restaurantId: dto.restaurantId,
          movementId: movement.id,
          supplierId: dto.supplierId,
          invoiceNo: dto.invoiceNo,
          invoiceDate: dto.invoiceDate ? new Date(dto.invoiceDate) : undefined,
          totalAmount: new Decimal(dto.totalAmount),
          currency: dto.currency ?? 'USD',
          notes: dto.notes,
        },
      });

      // Create lots if lotNumber provided
      for (const line of dto.lines) {
        if (line.lotNumber) {
          await tx.lot.create({
            data: {
              ingredientId: line.ingredientId,
              warehouseId: dto.warehouseId,
              lotNumber: line.lotNumber,
              expiresAt: line.lotExpiresAt
                ? new Date(line.lotExpiresAt)
                : undefined,
              quantity: new Decimal(line.quantity),
              remainingQty: new Decimal(line.quantity),
              costPerUnit: new Decimal(line.unitCost ?? '0'),
            },
          });
        }
      }

      return movement;
    });

    // Apply stock deltas outside transaction so retries are safe
    for (const line of result.lines) {
      await this.stock.applyDelta(
        line.ingredientId,
        dto.warehouseId,
        new Decimal(line.quantity.toString()),
      );
    }

    await this.events.publish(InventoryEvent.STOCK_RECEIVED, dto.restaurantId, {
      movementId: result.id,
      supplierId: dto.supplierId,
      warehouseId: dto.warehouseId,
      lineCount: dto.lines.length,
    });

    this.logger.log(`Receipt created: ${result.id}`);
    return result;
  }

  // ── Adjustment ────────────────────────────────────────────────────────────

  async createAdjustment(dto: CreateAdjustmentDto, performedById?: string) {
    const movement = await this.prisma.stockMovement.create({
      data: {
        restaurantId: dto.restaurantId,
        type: MovementType.ADJUSTMENT,
        status: MovementStatus.CONFIRMED,
        toWarehouseId: dto.warehouseId,
        notes: dto.notes,
        performedById,
        confirmedAt: new Date(),
        lines: {
          create: dto.lines.map((l) => ({
            ingredientId: l.ingredientId,
            quantity: new Decimal(l.quantity), // can be negative
            notes: l.notes,
          })),
        },
      },
      include: { lines: true },
    });

    for (const line of movement.lines) {
      await this.stock.applyDelta(
        line.ingredientId,
        dto.warehouseId,
        new Decimal(line.quantity.toString()),
      );
    }

    await this.events.publish(InventoryEvent.STOCK_ADJUSTED, dto.restaurantId, {
      movementId: movement.id,
      warehouseId: dto.warehouseId,
    });

    this.logger.log(`Adjustment created: ${movement.id}`);
    return movement;
  }

  // ── Transfer ──────────────────────────────────────────────────────────────

  async createTransfer(dto: CreateTransferDto, performedById?: string) {
    if (dto.fromWarehouseId === dto.toWarehouseId) {
      throw new BadRequestException(
        'Source and destination warehouses must differ',
      );
    }

    // Verify stock availability
    for (const line of dto.lines) {
      const level = await this.prisma.stockLevel.findUnique({
        where: {
          ingredientId_warehouseId: {
            ingredientId: line.ingredientId,
            warehouseId: dto.fromWarehouseId,
          },
        },
      });
      const available = new Decimal(level?.quantity?.toString() ?? '0');
      const requested = new Decimal(line.quantity);
      if (available.lessThan(requested)) {
        throw new BadRequestException(
          `Insufficient stock for ingredient ${line.ingredientId}. ` +
            `Available: ${available}, Requested: ${requested}`,
        );
      }
    }

    // Create two movements: OUT + IN
    const [outMovement, inMovement] = await this.prisma.$transaction(
      async (tx) => {
        const out = await tx.stockMovement.create({
          data: {
            restaurantId: dto.restaurantId,
            type: MovementType.TRANSFER_OUT,
            status: MovementStatus.CONFIRMED,
            fromWarehouseId: dto.fromWarehouseId,
            toWarehouseId: dto.toWarehouseId,
            notes: dto.notes,
            performedById,
            confirmedAt: new Date(),
            lines: {
              create: dto.lines.map((l) => ({
                ingredientId: l.ingredientId,
                quantity: new Decimal(l.quantity).negated(),
              })),
            },
          },
          include: { lines: true },
        });

        const inn = await tx.stockMovement.create({
          data: {
            restaurantId: dto.restaurantId,
            type: MovementType.TRANSFER_IN,
            status: MovementStatus.CONFIRMED,
            fromWarehouseId: dto.fromWarehouseId,
            toWarehouseId: dto.toWarehouseId,
            notes: dto.notes,
            performedById,
            confirmedAt: new Date(),
            lines: {
              create: dto.lines.map((l) => ({
                ingredientId: l.ingredientId,
                quantity: new Decimal(l.quantity),
              })),
            },
          },
          include: { lines: true },
        });

        return [out, inn];
      },
    );

    // Apply deltas
    for (const line of outMovement.lines) {
      await this.stock.applyDelta(
        line.ingredientId,
        dto.fromWarehouseId,
        new Decimal(line.quantity.toString()),
      );
    }
    for (const line of inMovement.lines) {
      await this.stock.applyDelta(
        line.ingredientId,
        dto.toWarehouseId,
        new Decimal(line.quantity.toString()),
      );
    }

    await this.events.publish(
      InventoryEvent.STOCK_TRANSFERRED,
      dto.restaurantId,
      {
        outMovementId: outMovement.id,
        inMovementId: inMovement.id,
        fromWarehouseId: dto.fromWarehouseId,
        toWarehouseId: dto.toWarehouseId,
      },
    );

    return { outMovement, inMovement };
  }

  // ── Waste ─────────────────────────────────────────────────────────────────

  async createWaste(dto: CreateWasteDto, performedById?: string) {
    const movement = await this.prisma.stockMovement.create({
      data: {
        restaurantId: dto.restaurantId,
        type: MovementType.WASTE,
        status: MovementStatus.CONFIRMED,
        fromWarehouseId: dto.warehouseId,
        notes: dto.notes,
        performedById,
        confirmedAt: new Date(),
        lines: {
          create: dto.lines.map((l) => ({
            ingredientId: l.ingredientId,
            quantity: new Decimal(l.quantity).negated(), // always negative
            notes: l.reason,
          })),
        },
      },
      include: { lines: true },
    });

    for (const line of movement.lines) {
      await this.stock.applyDelta(
        line.ingredientId,
        dto.warehouseId,
        new Decimal(line.quantity.toString()),
      );
    }

    await this.events.publish(InventoryEvent.STOCK_WASTED, dto.restaurantId, {
      movementId: movement.id,
      warehouseId: dto.warehouseId,
    });

    return movement;
  }

  // ── Cancel movement (compensating) ───────────────────────────────────────

  async cancelMovement(id: string, restaurantId: string) {
    const movement = await this.prisma.stockMovement.findFirst({
      where: { id, restaurantId },
      include: { lines: true },
    });

    if (!movement) throw new NotFoundException(`Movement ${id} not found`);
    if (movement.status === MovementStatus.CANCELLED) {
      throw new BadRequestException('Movement already cancelled');
    }

    // Create compensating movement with negated quantities
    const compensating = await this.prisma.stockMovement.create({
      data: {
        restaurantId: movement.restaurantId,
        type: movement.type,
        status: MovementStatus.CONFIRMED,
        fromWarehouseId: movement.toWarehouseId,
        toWarehouseId: movement.fromWarehouseId,
        notes: `Compensation for movement ${id}`,
        referenceId: id,
        referenceType: 'movement_cancellation',
        confirmedAt: new Date(),
        lines: {
          create: movement.lines.map((l) => ({
            ingredientId: l.ingredientId,
            quantity: new Decimal(l.quantity.toString()).negated(),
          })),
        },
      },
      include: { lines: true },
    });

    // Mark original as cancelled
    await this.prisma.stockMovement.update({
      where: { id },
      data: { status: MovementStatus.CANCELLED },
    });

    await this.events.publish(InventoryEvent.MOVEMENT_CANCELLED, restaurantId, {
      originalMovementId: id,
      compensatingMovementId: compensating.id,
    });

    return compensating;
  }

  // ── Queries ───────────────────────────────────────────────────────────────

  findAll(
    restaurantId: string,
    type?: string,
    warehouseId?: string,
    limit = 50,
    offset = 0,
  ) {
    return this.prisma.stockMovement.findMany({
      where: {
        restaurantId,
        ...(type ? { type: type as MovementType } : {}),
        ...(warehouseId
          ? {
              OR: [
                { fromWarehouseId: warehouseId },
                { toWarehouseId: warehouseId },
              ],
            }
          : {}),
      },
      include: {
        lines: { include: { ingredient: true } },
        fromWarehouse: true,
        toWarehouse: true,
        purchaseReceipt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: string, restaurantId: string) {
    const m = await this.prisma.stockMovement.findFirst({
      where: { id, restaurantId },
      include: {
        lines: { include: { ingredient: { include: { unit: true } } } },
        fromWarehouse: true,
        toWarehouse: true,
        purchaseReceipt: { include: { supplier: true } },
      },
    });
    if (!m) throw new NotFoundException(`Movement ${id} not found`);
    return m;
  }
}
