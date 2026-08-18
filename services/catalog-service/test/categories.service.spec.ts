// services/catalog-service/test/categories.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from '../src/categories/categories.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { CatalogEventsPublisher } from '../src/events/catalog-events.publisher';
import { MenuCacheService } from '../src/cache/menu-cache.service';
import { NotFoundException, ConflictException } from '@nestjs/common';

const mockPrisma = {
  category: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  menuItem: {
    count: jest.fn(),
  },
};

const mockEvents = { publish: jest.fn() };
const mockCache = { invalidateMenu: jest.fn(), getPublishedMenu: jest.fn() };

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: CatalogEventsPublisher, useValue: mockEvents },
        { provide: MenuCacheService, useValue: mockCache },
      ],
    }).compile();

    service = module.get(CategoriesService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('creates a category and publishes an event', async () => {
      const dto = {
        restaurantId: 'rest-1',
        name: 'Burgers',
      };
      const created = { id: 'cat-1', ...dto, sortOrder: 0, isActive: true };
      mockPrisma.category.create.mockResolvedValue(created);
      mockEvents.publish.mockResolvedValue(undefined);
      mockCache.invalidateMenu.mockResolvedValue(undefined);

      const result = await service.create(dto);

      expect(result).toEqual(created);
      expect(mockPrisma.category.create).toHaveBeenCalledTimes(1);
      expect(mockEvents.publish).toHaveBeenCalledTimes(1);
      expect(mockCache.invalidateMenu).toHaveBeenCalledWith(
        'rest-1',
        undefined,
      );
    });
  });

  describe('findOne', () => {
    it('returns a category when found', async () => {
      const category = { id: 'cat-1', restaurantId: 'rest-1', name: 'Burgers' };
      mockPrisma.category.findFirst.mockResolvedValue(category);

      const result = await service.findOne('cat-1', 'rest-1');
      expect(result).toEqual(category);
    });

    it('throws NotFoundException when not found', async () => {
      mockPrisma.category.findFirst.mockResolvedValue(null);
      await expect(service.findOne('missing', 'rest-1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('throws ConflictException when active items exist', async () => {
      mockPrisma.category.findFirst.mockResolvedValue({
        id: 'cat-1',
        restaurantId: 'rest-1',
        name: 'Burgers',
        branchId: null,
      });
      mockPrisma.menuItem.count.mockResolvedValue(3);

      await expect(service.remove('cat-1', 'rest-1')).rejects.toThrow(
        ConflictException,
      );
    });

    it('deletes category and publishes event when no active items', async () => {
      const category = {
        id: 'cat-1',
        restaurantId: 'rest-1',
        name: 'Burgers',
        branchId: null,
      };
      mockPrisma.category.findFirst.mockResolvedValue(category);
      mockPrisma.menuItem.count.mockResolvedValue(0);
      mockPrisma.category.delete.mockResolvedValue(category);
      mockEvents.publish.mockResolvedValue(undefined);
      mockCache.invalidateMenu.mockResolvedValue(undefined);

      await service.remove('cat-1', 'rest-1');

      expect(mockPrisma.category.delete).toHaveBeenCalledWith({
        where: { id: 'cat-1' },
      });
      expect(mockEvents.publish).toHaveBeenCalledTimes(1);
    });
  });
});
