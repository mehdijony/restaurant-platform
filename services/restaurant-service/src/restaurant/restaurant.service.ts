// src/restaurant/restaurant.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  private readonly logger = new Logger(RestaurantService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRestaurantDto) {
    this.logger.log(`Creating restaurant: ${dto.name}`);

    const company = await this.prisma.company.findUnique({
      where: { id: dto.companyId },
    });

    if (!company) {
      throw new NotFoundException(`Company with ID ${dto.companyId} not found`);
    }

    const existing = await this.prisma.restaurant.findUnique({
      where: { slug: dto.slug },
    });

    if (existing) {
      throw new ConflictException(
        `A restaurant with slug "${dto.slug}" already exists`,
      );
    }

    return this.prisma.restaurant.create({
      data: dto,
      include: { company: true },
    });
  }

  async findAll(companyId?: string) {
    return this.prisma.restaurant.findMany({
      where: companyId ? { companyId } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        company: { select: { id: true, name: true } },
        _count: { select: { branches: true } },
      },
    });
  }

  async findOne(id: string) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id },
      include: {
        company: true,
        branches: {
          include: {
            operatingHours: true,
            _count: { select: { staffAssignments: true } },
          },
        },
      },
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }

    return restaurant;
  }

  async update(id: string, dto: UpdateRestaurantDto) {
    await this.findOne(id);

    return this.prisma.restaurant.update({
      where: { id },
      data: dto,
      include: { company: true },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.restaurant.delete({ where: { id } });

    return { message: `Restaurant ${id} deleted successfully` };
  }
}
