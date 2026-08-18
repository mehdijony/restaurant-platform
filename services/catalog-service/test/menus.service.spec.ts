// services/catalog-service/test/menus.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MenusService } from '../src/menus/menus.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { CatalogEventsPublisher } from '../src/events/catalog-events.publisher';
import { MenuCacheService } from '../src/cache/menu-cache.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';

const baseMenu = {
  id: 'menu-1',
  restaurantId: 'rest-1',
  branchId: null,
  name: 'Lunch Menu',
  status: 'DRAFT',
  sections: [],
};

const mockPrisma = {
  menu: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
  },
};

const mockEvents = { publish: jest.fn() };
const mockCache = {
  getPublishedMenu: jest.fn(),
  setPublishedMenu: jest.fn(),
  invalidateMenu: jest.fn(),
};

describe('MenusService', () => {
  let service: MenusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenusService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: CatalogEventsPublisher, useValue: mockEvents },
        { provide: MenuCacheService, useValue: mockCache },
      ],
    }).compile();

    service = module.get(MenusService);
    jest.clearAllMocks();
  });

  describe('publish', () => {
    it('publishes a draft menu', async () => {
      mockPrisma.menu.findFirst.mockResolvedValue(baseMenu);
      const published = {
        ...baseMenu,
        status: 'PUBLISHED',
        publishedAt: new Date(),
      };
      mockPrisma.menu.update.mockResolvedValue(published);

      const result = await service.publish('menu-1', 'rest-1');

      expect(result.status).toBe('PUBLISHED');
      expect(mockCache.setPublishedMenu).toHaveBeenCalledTimes(1);
      expect(mockEvents.publish).toHaveBeenCalledWith(
        'catalog.menu.published',
        'rest-1',
        expect.objectContaining({ menuId: 'menu-1' }),
      );
    });

    it('throws BadRequestException when publishing archived menu', async () => {
      mockPrisma.menu.findFirst.mockResolvedValue({
        ...baseMenu,
        status: 'ARCHIVED',
      });
      await expect(service.publish('menu-1', 'rest-1')).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('getPublishedMenu', () => {
    it('returns cached menu when available', async () => {
      const cached = { id: 'menu-1', name: 'Cached Menu' };
      mockCache.getPublishedMenu.mockResolvedValue(cached);

      const result = await service.getPublishedMenu('rest-1');
      expect(result).toEqual(cached);
      expect(mockPrisma.menu.findFirst).not.toHaveBeenCalled();
    });

    it('falls back to database when cache miss', async () => {
      mockCache.getPublishedMenu.mockResolvedValue(null);
      mockPrisma.menu.findFirst.mockResolvedValue(baseMenu);

      const result = await service.getPublishedMenu('rest-1');
      expect(result).toEqual(baseMenu);
      expect(mockCache.setPublishedMenu).toHaveBeenCalledTimes(1);
    });
  });
});
