// src/health/health.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Public } from '../common/decorators/public.decorator';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Public()
  @Get()
  async check() {
    let databaseStatus: 'ok' | 'error' = 'error';
    let databaseMessage = '';

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      databaseStatus = 'ok';
    } catch (error) {
      databaseMessage =
        error instanceof Error ? error.message : 'Unknown error';
    }

    return {
      status: databaseStatus === 'ok' ? 'ok' : 'error',
      service: 'restaurant-service',
      timestamp: new Date().toISOString(),
      checks: {
        database: {
          status: databaseStatus,
          ...(databaseMessage && { message: databaseMessage }),
        },
      },
    };
  }
}
