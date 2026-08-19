// services/inventory-service/test/ingredients.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { IngredientsService } from '../src/ingredients/ingredients.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { InventoryEventsPublisher } from '../src/events/inventory-events.publisher';
import { NotFoundException } from '@nestjs/common';

const mockPrisma = {
  ingredient: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
  },
};
const mockEvents = { publish: jest.fn() };

describe('IngredientsService', () => {
  let svc: IngredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IngredientsService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: InventoryEventsPublisher, useValue: mockEvents },
      ],
    }).compile();

    svc = module.get(IngredientsService);
    jest.clearAllMocks();
  });

  it('creates an ingredient and publishes event', async () => {
    const dto = {
      restaurantId: 'rest-1',
      name: 'Tomato',
      unitId: 'unit-1',
    };
    const created = {
      id: 'ing-1',
      ...dto,
      unit: { id: 'unit-1', abbreviation: 'kg' },
    };
    mockPrisma.ingredient.create.mockResolvedValue(created);

    const result = await svc.create(dto);

    expect(result.id).toBe('ing-1');
    expect(mockEvents.publish).toHaveBeenCalledTimes(1);
  });

  it('throws NotFoundException when ingredient not found', async () => {
    mockPrisma.ingredient.findFirst.mockResolvedValue(null);
    await expect(svc.findOne('missing', 'rest-1')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('deactivates an ingredient', async () => {
    mockPrisma.ingredient.findFirst.mockResolvedValue({
      id: 'ing-1',
      restaurantId: 'rest-1',
    });
    mockPrisma.ingredient.update.mockResolvedValue({
      id: 'ing-1',
      isActive: false,
    });

    const result = await svc.deactivate('ing-1', 'rest-1');
    expect(result.isActive).toBe(false);
  });
});
