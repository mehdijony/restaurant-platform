// services/catalog-service/test/items.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from '../src/items/items.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { CatalogEventsPublisher } from '../src/events/catalog-events.publisher';
import { MenuCacheService } from '../src/cache/menu-cache.service';
import { NotFoundException } from '@nestjs/common';

const mockPrisma = {
  menuItem: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  menuItemModifierGroup: {
    upsert: jest.fn(),
    delete: jest.fn(),
  },
};

const mockEvents = { publish: jest.fn() };
const mockCache = { invalidateMenu: jest.fn() };

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: CatalogEventsPublisher, useValue: mockEvents },
        { provide: MenuCacheService, useValue: mockCache },
      ],
    }).compile();

    service = module.get(ItemsService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('creates an item and publishes event', async () => {
      const dto = {
        restaurantId: 'rest-1',
        categoryId: 'cat-1',
        name: 'Classic Burger',
      };
      const created = {
        id: 'item-1',
        ...dto,
        isActive: true,
        prices: [],
        modifierGroups: [],
      };
      mockPrisma.menuItem.create.mockResolvedValue(created);

      const result = await service.create(dto);

      expect(result.id).toBe('item-1');
      expect(mockEvents.publish).toHaveBeenCalledTimes(1);
      expect(mockCache.invalidateMenu).toHaveBeenCalledWith('rest-1');
    });
  });

  describe('findOne', () => {
    it('throws NotFoundException when item not found', async () => {
      mockPrisma.menuItem.findFirst.mockResolvedValue(null);
      await expect(service.findOne('missing', 'rest-1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('updates isActive and fires availability_changed event', async () => {
      const item = {
        id: 'item-1',
        restaurantId: 'rest-1',
        name: 'Burger',
        categoryId: 'cat-1',
        isActive: false,
        prices: [],
      };
      mockPrisma.menuItem.findFirst.mockResolvedValue(item);
      mockPrisma.menuItem.update.mockResolvedValue({
        ...item,
        isActive: false,
      });

      await service.update('item-1', 'rest-1', { isActive: false });

      const publishedEvent = mockEvents.publish.mock.calls[0][0];
      expect(publishedEvent).toBe('catalog.item.availability_changed');
    });
  });
});
