// services/inventory-service/test/stock.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { StockService } from '../src/stock/stock.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { InventoryEventsPublisher } from '../src/events/inventory-events.publisher';
import Decimal from 'decimal.js';

const mockPrisma = {
  stockLevel: { upsert: jest.fn() },
  $queryRaw: jest.fn().mockResolvedValue([]),
};
const mockEvents = { publish: jest.fn() };

describe('StockService', () => {
  let svc: StockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StockService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: InventoryEventsPublisher, useValue: mockEvents },
      ],
    }).compile();

    svc = module.get(StockService);
    jest.clearAllMocks();
  });

  it('upserts stock level when applying positive delta', async () => {
    mockPrisma.stockLevel.upsert.mockResolvedValue({});
    await svc.applyDelta('ing-1', 'wh-1', new Decimal('5'));
    expect(mockPrisma.stockLevel.upsert).toHaveBeenCalledTimes(1);
    const call = mockPrisma.stockLevel.upsert.mock.calls[0][0];
    expect(call.update.quantity.increment).toBe(5);
  });

  it('publishes STOCK_LOW events for below-reorder ingredients', async () => {
    mockPrisma.$queryRaw.mockResolvedValue([
      {
        id: 'ing-1',
        restaurantId: 'rest-1',
        name: 'Tomato',
        qty: 2,
        reorderPoint: 10,
      },
    ]);
    await svc.checkLowStock();
    expect(mockEvents.publish).toHaveBeenCalledWith(
      'inventory.stock.low',
      'rest-1',
      expect.objectContaining({ ingredientId: 'ing-1' }),
    );
  });
});
