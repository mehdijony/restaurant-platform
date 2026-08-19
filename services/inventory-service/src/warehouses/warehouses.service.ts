// services/inventory-service/src/warehouses/warehouses.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';

@Injectable()
export class WarehousesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateWarehouseDto) {
    return this.prisma.warehouse.create({
      data: { ...dto, isActive: dto.isActive ?? true },
    });
  }

  findAll(restaurantId: string, branchId?: string) {
    return this.prisma.warehouse.findMany({
      where: {
        restaurantId,
        isActive: true,
        ...(branchId ? { OR: [{ branchId }, { branchId: null }] } : {}),
      },
    });
  }

  async findOne(id: string, restaurantId: string) {
    const w = await this.prisma.warehouse.findFirst({
      where: { id, restaurantId },
    });
    if (!w) throw new NotFoundException(`Warehouse ${id} not found`);
    return w;
  }

  async deactivate(id: string, restaurantId: string) {
    await this.findOne(id, restaurantId);
    return this.prisma.warehouse.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
