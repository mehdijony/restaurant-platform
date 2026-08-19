// services/inventory-service/src/units/units.service.ts
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUnitDto } from './dto/create-unit.dto';

@Injectable()
export class UnitsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUnitDto) {
    const exists = await this.prisma.unit.findUnique({
      where: {
        restaurantId_abbreviation: {
          restaurantId: dto.restaurantId,
          abbreviation: dto.abbreviation,
        },
      },
    });
    if (exists)
      throw new ConflictException(`Unit "${dto.abbreviation}" already exists`);

    return this.prisma.unit.create({
      data: { ...dto, isBase: dto.isBase ?? false },
    });
  }

  findAll(restaurantId: string) {
    return this.prisma.unit.findMany({ where: { restaurantId } });
  }

  async findOne(id: string, restaurantId: string) {
    const unit = await this.prisma.unit.findFirst({
      where: { id, restaurantId },
    });
    if (!unit) throw new NotFoundException(`Unit ${id} not found`);
    return unit;
  }

  async addConversion(
    fromUnitId: string,
    toUnitId: string,
    factor: string,
    restaurantId: string,
  ) {
    await this.findOne(fromUnitId, restaurantId);
    await this.findOne(toUnitId, restaurantId);

    return this.prisma.unitConversion.upsert({
      where: { fromUnitId_toUnitId: { fromUnitId, toUnitId } },
      create: { fromUnitId, toUnitId, factor },
      update: { factor },
    });
  }
}
