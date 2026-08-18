import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// ─────────────────────────────────────────────────────────
// PrismaService
// In Prisma v7, the adapter is passed to PrismaClient
// directly — not via schema.prisma url
// ─────────────────────────────────────────────────────────

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);
  private readonly pool: Pool;

  constructor() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL is not defined. Check your .env file.');
    }

    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);

    // ── Pass adapter to PrismaClient constructor ───────────
    // Prisma v7: connection is managed via adapter, not url
    super({ adapter });

    this.pool = pool;
  }

  async onModuleInit(): Promise<void> {
    this.logger.log('Connecting to PostgreSQL via Prisma...');
    await this.$connect();
    this.logger.log('PostgreSQL connected successfully');
  }

  async onModuleDestroy(): Promise<void> {
    this.logger.log('Disconnecting from PostgreSQL...');
    await this.$disconnect();
    await this.pool.end();
    this.logger.log('PostgreSQL disconnected');
  }
}
