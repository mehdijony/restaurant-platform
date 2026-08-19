// services/inventory-service/src/suppliers/suppliers.service.ts
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InventoryEventsPublisher } from '../events/inventory-events.publisher';
import { InventoryEvent } from '../events/inventory-events.enum';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  private readonly logger = new Logger(SuppliersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly events: InventoryEventsPublisher,
  ) {}

  async create(dto: CreateSupplierDto) {
    const supplier = await this.prisma.supplier.create({ data: dto });
    await this.events.publish(
      InventoryEvent.SUPPLIER_CREATED,
      dto.restaurantId,
      {
        supplierId: supplier.id,
        name: supplier.name,
      },
    );
    this.logger.log(`Supplier created: ${supplier.id}`);
    return supplier;
  }

  findAll(restaurantId: string, includeInactive = false) {
    return this.prisma.supplier.findMany({
      where: {
        restaurantId,
        ...(includeInactive ? {} : { isActive: true }),
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string, restaurantId: string) {
    const s = await this.prisma.supplier.findFirst({
      where: { id, restaurantId },
    });
    if (!s) throw new NotFoundException(`Supplier ${id} not found`);
    return s;
  }

  async update(id: string, restaurantId: string, dto: UpdateSupplierDto) {
    await this.findOne(id, restaurantId);
    return this.prisma.supplier.update({ where: { id }, data: dto });
  }

  async deactivate(id: string, restaurantId: string) {
    await this.findOne(id, restaurantId);
    return this.prisma.supplier.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
