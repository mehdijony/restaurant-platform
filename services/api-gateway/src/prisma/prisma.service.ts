// services/api-gateway/src/prisma/prisma.service.ts
import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);
  private readonly pool: Pool;

  constructor() {
    const connectionString = process.env.DATABASE_URL;

    // ── Fail fast with a clear error ──────────────────────
    if (!connectionString) {
      throw new Error(
        '[PrismaService] DATABASE_URL is undefined!\n' +
          'Fix: Add "import dotenv/config" as the FIRST line in main.ts',
      );
    }

    const pool = new Pool({
      connectionString,
      max: 20,
      idleTimeoutMillis: 30000,
    });

    const adapter = new PrismaPg(pool);

    super({ adapter });

    // ── Assign after super() ───────────────────────────────
    this.pool = pool;
  }

  async onModuleInit(): Promise<void> {
    this.logger.log('Connecting to PostgreSQL...');
    await this.$connect();
    this.logger.log('PostgreSQL connected successfully');
  }

  async onModuleDestroy(): Promise<void> {
    this.logger.log('Disconnecting from PostgreSQL...');
    await this.$disconnect();
    await this.pool.end(); // ← also close the pool
    this.logger.log('PostgreSQL disconnected');
  }
}
