// services/catalog-service/test/modifiers.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ModifiersService } from '../src/modifiers/modifiers.service';
import { PrismaService } from '../src/prisma/prisma.service';
import { CatalogEventsPublisher } from '../src/events/catalog-events.publisher';
import { MenuCacheService } from '../src/cache/menu-cache.service';
import { NotFoundException } from '@nestjs/common';

const mockPrisma = {
  modifierGroup: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    delete: jest.fn(),
  },
  modifierOption: {
    create: jest.fn(),
    delete: jest.fn(),
  },
};

const mockEvents = { publish: jest.fn() };
const mockCache = { invalidateMenu: jest.fn() };

describe('ModifiersService', () => {
  let service: ModifiersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ModifiersService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: CatalogEventsPublisher, useValue: mockEvents },
        { provide: MenuCacheService, useValue: mockCache },
      ],
    }).compile();

    service = module.get(ModifiersService);
    jest.clearAllMocks();
  });

  describe('createGroup', () => {
    it('creates group with options and publishes event', async () => {
      const dto = {
        restaurantId: 'rest-1',
        name: 'Sizes',
        options: [
          { name: 'Small', additionalPrice: '0' },
          { name: 'Large', additionalPrice: '1.50' },
        ],
      };
      const created = { id: 'grp-1', ...dto, options: dto.options };
      mockPrisma.modifierGroup.create.mockResolvedValue(created);

      const result = await service.createGroup(dto);

      expect(result.id).toBe('grp-1');
      expect(mockEvents.publish).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOneGroup', () => {
    it('throws NotFoundException when group not found', async () => {
      mockPrisma.modifierGroup.findFirst.mockResolvedValue(null);
      await expect(service.findOneGroup('missing', 'rest-1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
