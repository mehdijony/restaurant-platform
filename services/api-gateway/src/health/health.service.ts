import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  async check() {
    let databaseStatus: 'ok' | 'error' = 'error';
    let databaseMessage = '';

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      databaseStatus = 'ok';
    } catch (error) {
      databaseMessage =
        error instanceof Error ? error.message : 'Unknown database error';
    }

    return {
      status: databaseStatus === 'ok' ? 'ok' : 'error',
      service: 'api-gateway',
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
