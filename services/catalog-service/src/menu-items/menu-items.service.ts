import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { MenuItem } from '@prisma/client';

@Injectable()
export class MenuItemsService {
  private readonly logger = new Logger(MenuItemsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string, restaurantId: string): Promise<any> {
    return this.prisma.menuItem.findFirst({
      where: {
        id,
        restaurantId,
        isActive: true,
      },
      include: {
        prices: true,
        modifierGroups: {
          include: {
            modifierGroup: {
              include: {
                options: true,
              },
            },
          },
        },
      },
    });
  }
  async findAll(restaurantId: string, branchId?: string): Promise<any[]> {
    return this.prisma.menuItem.findMany({
      where: {
        restaurantId,
        isActive: true,
        ...(branchId ? { branchId } : {}),
      },
      include: {
        prices: true,
        modifierGroups: {
          include: {
            modifierGroup: {
              include: {
                options: true,
              },
            },
          },
        },
      },
      orderBy: { sortOrder: 'asc' },
    });
  }


}
