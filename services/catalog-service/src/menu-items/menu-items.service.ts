import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { MenuItem } from '@prisma/client';

@Injectable()
export class MenuItemsService {
  private readonly logger = new Logger(MenuItemsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(restaurantId: string, branchId?: string): Promise<any[]> {
    return this.prisma.menuItem.findMany({
      where: {
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
      orderBy: { sortOrder: 'asc' },
    });
  }

  // Additional methods like findOne, create, etc. can be added here
}
