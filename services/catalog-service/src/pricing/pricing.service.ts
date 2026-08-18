// services/catalog-service/src/pricing/pricing.service.ts
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CatalogEventsPublisher } from '../events/catalog-events.publisher';
import { MenuCacheService } from '../cache/menu-cache.service';
import { CatalogEvent } from '../events/catalog-events.enum';
import { UpsertPriceDto } from './dto/upsert-price.dto';
import Decimal from 'decimal.js';

@Injectable()
export class PricingService {
  private readonly logger = new Logger(PricingService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: CatalogEventsPublisher,
    private readonly cache: MenuCacheService,
  ) {}

  async upsertPrice(restaurantId: string, dto: UpsertPriceDto) {
    const item = await this.prisma.menuItem.findFirst({
      where: { id: dto.menuItemId, restaurantId },
    });
    if (!item)
      throw new NotFoundException(`MenuItem ${dto.menuItemId} not found`);

    // if setting as default, unset other defaults for this item+branch
    if (dto.isDefault) {
      await this.prisma.price.updateMany({
        where: {
          menuItemId: dto.menuItemId,
          branchId: dto.branchId ?? null,
          isDefault: true,
        },
        data: { isDefault: false },
      });
    }

    const price = await this.prisma.price.create({
      data: {
        menuItemId: dto.menuItemId,
        branchId: dto.branchId,
        label: dto.label,
        amount: new Decimal(dto.amount),
        currency: dto.currency ?? 'USD',
        isDefault: dto.isDefault ?? false,
        validFrom: dto.validFrom ? new Date(dto.validFrom) : undefined,
        validUntil: dto.validUntil ? new Date(dto.validUntil) : undefined,
      },
    });

    await this.events.publish(CatalogEvent.PRICE_UPDATED, restaurantId, {
      menuItemId: dto.menuItemId,
      restaurantId,
      priceId: price.id,
      amount: dto.amount,
      currency: price.currency,
    });
    await this.cache.invalidateMenu(restaurantId, dto.branchId);

    return price;
  }

  async getPricesForItem(menuItemId: string, restaurantId: string) {
    const item = await this.prisma.menuItem.findFirst({
      where: { id: menuItemId, restaurantId },
    });
    if (!item) throw new NotFoundException(`MenuItem ${menuItemId} not found`);

    return this.prisma.price.findMany({
      where: { menuItemId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
