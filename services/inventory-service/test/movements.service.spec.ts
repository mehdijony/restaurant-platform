// services/inventory-service/test/movements.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MovementsService } from '../src/movements/movements.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { StockService } from '../src/stock/stock.service';
import { InventoryEventsPublisher } from '../src/events/inventory-events.publisher';
import { BadRequestException, NotFoundException } from '@nestjs/common';

const mockTx = {
  stockMovement: { create: jest.fn(), update: jest.fn(), findFirst: jest.fn() },
  purchaseReceipt: { create: jest.fn() },
  lot: { create: jest.fn() },
};

const mockPrisma = {
  stockMovement: {
    create: jest.fn(),
    findFirst: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
  },
  stockLevel: { findUnique: jest.fn() },
  $transaction: jest.fn((cb: (tx: typeof mockTx) => unknown) => cb(mockTx)),
};

const mockStock = { applyDelta: jest.fn() };
const mockEvents = { publish: jest.fn() };

describe('MovementsService', () => {
  let svc: MovementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovementsService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: StockService, useValue: mockStock },
        { provide: InventoryEventsPublisher, useValue: mockEvents },
      ],
    }).compile();

    svc = module.get(MovementsService);
    jest.clearAllMocks();
  });

  describe('createReceipt', () => {
    it('creates receipt movement and applies stock delta', async () => {
      const movement = {
        id: 'mov-1',
        lines: [{ ingredientId: 'ing-1', quantity: { toString: () => '5' } }],
      };
      mockTx.stockMovement.create.mockResolvedValue(movement);
      mockTx.purchaseReceipt.create.mockResolvedValue({});

      const dto = {
        restaurantId: 'rest-1',
        supplierId: 'sup-1',
        warehouseId: 'wh-1',
        totalAmount: '100.00',
        lines: [{ ingredientId: 'ing-1', quantity: '5' }],
      };

      const result = await svc.createReceipt(dto, 'user-1');

      expect(result.id).toBe('mov-1');
      expect(mockStock.applyDelta).toHaveBeenCalledTimes(1);
      expect(mockEvents.publish).toHaveBeenCalledTimes(1);
    });
  });

  describe('createTransfer', () => {
    it('throws BadRequestException for same warehouse', async () => {
      await expect(
        svc.createTransfer({
          restaurantId: 'rest-1',
          fromWarehouseId: 'wh-1',
          toWarehouseId: 'wh-1',
          lines: [],
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('throws BadRequestException when insufficient stock', async () => {
      mockPrisma.stockLevel.findUnique.mockResolvedValue({
        quantity: { toString: () => '2' },
      });

      await expect(
        svc.createTransfer({
          restaurantId: 'rest-1',
          fromWarehouseId: 'wh-1',
          toWarehouseId: 'wh-2',
          lines: [{ ingredientId: 'ing-1', quantity: '10' }],
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('cancelMovement', () => {
    it('throws NotFoundException when movement not found', async () => {
      mockPrisma.stockMovement.findFirst.mockResolvedValue(null);
      await expect(svc.cancelMovement('mov-x', 'rest-1')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('throws BadRequestException when already cancelled', async () => {
      mockPrisma.stockMovement.findFirst.mockResolvedValue({
        id: 'mov-1',
        status: 'CANCELLED',
        lines: [],
      });
      await expect(svc.cancelMovement('mov-1', 'rest-1')).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
