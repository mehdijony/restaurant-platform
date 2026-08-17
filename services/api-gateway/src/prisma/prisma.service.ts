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

  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Optional: Configure connection pool
      max: 20,
      idleTimeoutMillis: 30000,
    });

    const adapter = new PrismaPg(pool);
    super({
      adapter,
      // Optional: Add logging if needed
      // log: ['query', 'info', 'warn', 'error'],
    });
  }

  async onModuleInit(): Promise<void> {
    this.logger.log('Connecting to PostgreSQL...');
    await this.$connect();
    this.logger.log('PostgreSQL connected');
  }

  async onModuleDestroy(): Promise<void> {
    this.logger.log('Disconnecting from PostgreSQL...');
    await this.$disconnect();
    this.logger.log('PostgreSQL disconnected');
  }
}
