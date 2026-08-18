// services/catalog-service/src/availability/availability.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpsertAvailabilityDto } from './dto/upsert-availability.dto';

@Injectable()
export class AvailabilityService {
  constructor(private readonly prisma: PrismaService) {}

  async upsert(restaurantId: string, dto: UpsertAvailabilityDto) {
    const item = await this.prisma.menuItem.findFirst({
      where: { id: dto.menuItemId, restaurantId },
    });
    if (!item)
      throw new NotFoundException(`MenuItem ${dto.menuItemId} not found`);

    // Remove existing slot for same day+branch, then insert
    await this.prisma.availability.deleteMany({
      where: {
        menuItemId: dto.menuItemId,
        branchId: dto.branchId ?? null,
        dayOfWeek: dto.dayOfWeek,
      },
    });

    return this.prisma.availability.create({
      data: {
        menuItemId: dto.menuItemId,
        branchId: dto.branchId,
        dayOfWeek: dto.dayOfWeek,
        startTime: dto.startTime,
        endTime: dto.endTime,
      },
    });
  }

  async getForItem(menuItemId: string, restaurantId: string) {
    const item = await this.prisma.menuItem.findFirst({
      where: { id: menuItemId, restaurantId },
    });
    if (!item) throw new NotFoundException(`MenuItem ${menuItemId} not found`);

    return this.prisma.availability.findMany({
      where: { menuItemId },
      orderBy: { dayOfWeek: 'asc' },
    });
  }
}
