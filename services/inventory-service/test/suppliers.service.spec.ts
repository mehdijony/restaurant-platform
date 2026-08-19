// services/inventory-service/test/suppliers.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from '../src/suppliers/suppliers.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { InventoryEventsPublisher } from '../src/events/inventory-events.publisher';
import { NotFoundException } from '@nestjs/common';

const mockPrisma = {
  supplier: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
  },
};
const mockEvents = { publish: jest.fn() };

describe('SuppliersService', () => {
  let svc: SuppliersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppliersService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: InventoryEventsPublisher, useValue: mockEvents },
      ],
    }).compile();

    svc = module.get(SuppliersService);
    jest.clearAllMocks();
  });

  it('creates supplier and publishes event', async () => {
    const supplier = { id: 'sup-1', name: 'Fresh Co', restaurantId: 'rest-1' };
    mockPrisma.supplier.create.mockResolvedValue(supplier);

    const result = await svc.create({
      restaurantId: 'rest-1',
      name: 'Fresh Co',
    });
    expect(result.id).toBe('sup-1');
    expect(mockEvents.publish).toHaveBeenCalledTimes(1);
  });

  it('throws NotFoundException when supplier not found', async () => {
    mockPrisma.supplier.findFirst.mockResolvedValue(null);
    await expect(svc.findOne('missing', 'rest-1')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('deactivates supplier', async () => {
    mockPrisma.supplier.findFirst.mockResolvedValue({ id: 'sup-1' });
    mockPrisma.supplier.update.mockResolvedValue({
      id: 'sup-1',
      isActive: false,
    });

    const result = await svc.deactivate('sup-1', 'rest-1');
    expect(result.isActive).toBe(false);
  });
});
