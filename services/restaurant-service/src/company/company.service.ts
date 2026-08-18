// src/company/company.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  private readonly logger = new Logger(CompanyService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCompanyDto) {
    this.logger.log(`Creating company: ${dto.name}`);

    const existing = await this.prisma.company.findFirst({
      where: {
        OR: [{ slug: dto.slug }, { email: dto.email }],
      },
    });

    if (existing) {
      throw new ConflictException(
        'A company with this slug or email already exists',
      );
    }

    const company = await this.prisma.company.create({
      data: dto,
    });

    return company;
  }

  async findAll() {
    return this.prisma.company.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { restaurants: true },
        },
      },
    });
  }

  async findOne(id: string) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: {
        restaurants: {
          include: {
            _count: {
              select: { branches: true },
            },
          },
        },
      },
    });

    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }

    return company;
  }

  async update(id: string, dto: UpdateCompanyDto) {
    await this.findOne(id);

    return this.prisma.company.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.company.delete({
      where: { id },
    });

    return { message: `Company ${id} deleted successfully` };
  }
}
