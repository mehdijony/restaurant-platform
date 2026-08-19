// services/inventory-service/src/stock/stock.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { InventoryEventsPublisher } from '../events/inventory-events.publisher';
import { InventoryEvent } from '../events/inventory-events.enum';
import Decimal from 'decimal.js';

@Injectable()
export class StockService {
  private readonly logger = new Logger(StockService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: InventoryEventsPublisher,
  ) {}

  // ── Public helpers called by MovementsService ─────────────────────────────

  async applyDelta(
    ingredientId: string,
    warehouseId: string,
    delta: Decimal,
  ): Promise<void> {
    await this.prisma.stockLevel.upsert({
      where: {
        ingredientId_warehouseId: { ingredientId, warehouseId },
      },
      create: {
        ingredientId,
        warehouseId,
        quantity: delta.isPositive() ? delta : new Decimal(0),
        reservedQty: new Decimal(0),
      },
      update: {
        quantity: { increment: delta.toNumber() },
      },
    });
  }

  // ── Queries ───────────────────────────────────────────────────────────────

  getStockLevels(
    restaurantId: string,
    warehouseId?: string,
    ingredientId?: string,
  ) {
    return this.prisma.stockLevel.findMany({
      where: {
        ingredient: { restaurantId },
        ...(warehouseId ? { warehouseId } : {}),
        ...(ingredientId ? { ingredientId } : {}),
      },
      include: {
        ingredient: { include: { unit: true } },
        warehouse: true,
      },
      orderBy: { ingredient: { name: 'asc' } },
    });
  }

  getLots(restaurantId: string, ingredientId?: string, warehouseId?: string) {
    return this.prisma.lot.findMany({
      where: {
        ingredient: { restaurantId },
        ...(ingredientId ? { ingredientId } : {}),
        ...(warehouseId ? { warehouseId } : {}),
        remainingQty: { gt: 0 },
      },
      include: { ingredient: true, warehouse: true },
      orderBy: { expiresAt: 'asc' },
    });
  }

  // ── Low-stock check (runs every minute) ──────────────────────────────────

  @Cron('* * * * *')
  async checkLowStock(): Promise<void> {
    const lowItems = await this.prisma.$queryRaw<
      Array<{
        id: string;
        restaurantId: string;
        name: string;
        qty: number;
        reorderPoint: number;
      }>
    >`
      SELECT i.id, i."restaurantId", i.name,
             COALESCE(SUM(sl.quantity), 0)::float AS qty,
             i."reorderPoint"::float
      FROM   "Ingredient" i
      LEFT   JOIN "StockLevel" sl ON sl."ingredientId" = i.id
      WHERE  i."isActive" = true
      GROUP  BY i.id, i."restaurantId", i.name, i."reorderPoint"
      HAVING COALESCE(SUM(sl.quantity), 0) <= i."reorderPoint"
        AND  i."reorderPoint" > 0
    `;

    for (const item of lowItems) {
      this.logger.warn(
        `Low stock: ${item.name} (${item.qty} / ${item.reorderPoint})`,
      );
      await this.events.publish(InventoryEvent.STOCK_LOW, item.restaurantId, {
        ingredientId: item.id,
        name: item.name,
        currentQty: item.qty,
        reorderPoint: item.reorderPoint,
      });
    }
  }
}
