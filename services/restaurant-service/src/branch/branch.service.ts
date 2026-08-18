// src/branch/branch.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CreateOperatingHoursDto } from './dto/create-operating-hours.dto';
import { AssignStaffDto } from './dto/assign-staff.dto';

@Injectable()
export class BranchService {
  private readonly logger = new Logger(BranchService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBranchDto) {
    this.logger.log(`Creating branch: ${dto.name}`);

    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id: dto.restaurantId },
    });

    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with ID ${dto.restaurantId} not found`,
      );
    }

    return this.prisma.branch.create({
      data: {
        ...dto,
        latitude: dto.latitude ? dto.latitude : undefined,
        longitude: dto.longitude ? dto.longitude : undefined,
      },
      include: { restaurant: true },
    });
  }

  async findAll(restaurantId?: string) {
    return this.prisma.branch.findMany({
      where: restaurantId ? { restaurantId } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        restaurant: { select: { id: true, name: true } },
        operatingHours: true,
      },
    });
  }

  async findOne(id: string) {
    const branch = await this.prisma.branch.findUnique({
      where: { id },
      include: {
        restaurant: {
          include: { company: true },
        },
        operatingHours: { orderBy: { day: 'asc' } },
        staffAssignments: true,
      },
    });

    if (!branch) {
      throw new NotFoundException(`Branch with ID ${id} not found`);
    }

    return branch;
  }

  async update(id: string, dto: UpdateBranchDto) {
    await this.findOne(id);

    return this.prisma.branch.update({
      where: { id },
      data: {
        ...dto,
        latitude: dto.latitude ? dto.latitude : undefined,
        longitude: dto.longitude ? dto.longitude : undefined,
      },
      include: { restaurant: true },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.branch.delete({ where: { id } });
    return { message: `Branch ${id} deleted successfully` };
  }

  // ─────────────────────────────────────────
  // Operating Hours
  // ─────────────────────────────────────────

  async setOperatingHours(branchId: string, hours: CreateOperatingHoursDto[]) {
    await this.findOne(branchId);

    await this.prisma.operatingHours.deleteMany({ where: { branchId } });

    const created = await this.prisma.operatingHours.createMany({
      data: hours.map((h) => ({ ...h, branchId })),
    });

    return this.prisma.operatingHours.findMany({ where: { branchId } });
  }

  async getOperatingHours(branchId: string) {
    await this.findOne(branchId);
    return this.prisma.operatingHours.findMany({
      where: { branchId },
      orderBy: { day: 'asc' },
    });
  }

  // ─────────────────────────────────────────
  // Staff Assignment
  // ─────────────────────────────────────────

  async assignStaff(branchId: string, dto: AssignStaffDto) {
    await this.findOne(branchId);

    const existing = await this.prisma.staffAssignment.findUnique({
      where: { branchId_userId: { branchId, userId: dto.userId } },
    });

    if (existing) {
      return this.prisma.staffAssignment.update({
        where: { branchId_userId: { branchId, userId: dto.userId } },
        data: { role: dto.role, isActive: true },
      });
    }

    return this.prisma.staffAssignment.create({
      data: { branchId, ...dto },
    });
  }

  async removeStaff(branchId: string, userId: string) {
    await this.findOne(branchId);

    const assignment = await this.prisma.staffAssignment.findUnique({
      where: { branchId_userId: { branchId, userId } },
    });

    if (!assignment) {
      throw new NotFoundException(
        `Staff assignment not found for user ${userId} in branch ${branchId}`,
      );
    }

    await this.prisma.staffAssignment.delete({
      where: { branchId_userId: { branchId, userId } },
    });

    return { message: `Staff ${userId} removed from branch ${branchId}` };
  }

  async getStaff(branchId: string) {
    await this.findOne(branchId);
    return this.prisma.staffAssignment.findMany({
      where: { branchId, isActive: true },
    });
  }
}
