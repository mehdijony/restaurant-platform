// services/catalog-service/src/cache/menu-cache.service.ts
import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class MenuCacheService implements OnModuleDestroy {
  private readonly logger = new Logger(MenuCacheService.name);
  private readonly client: Redis;
  private readonly defaultTtl = 300; // 5 minutes

  constructor(config: ConfigService) {
    this.client = new Redis({
      host: config.get<string>('VALKEY_HOST', 'localhost'),
      port: config.get<number>('VALKEY_PORT', 6379),
      password: config.get<string>('VALKEY_PASSWORD'),
      keyPrefix: 'catalog:',
      lazyConnect: true,
    });

    this.client.on('error', (err) => this.logger.error('Valkey error', err));

    this.client
      .connect()
      .catch((err) => this.logger.error('Valkey connect failed', err));
  }

  private menuKey(restaurantId: string, branchId?: string | null): string {
    return `menu:${restaurantId}:${branchId ?? 'default'}`;
  }

  async getPublishedMenu(
    restaurantId: string,
    branchId?: string | null,
  ): Promise<unknown | null> {
    const key = this.menuKey(restaurantId, branchId);
    const raw = await this.client.get(key);
    return raw ? (JSON.parse(raw) as unknown) : null;
  }

  async setPublishedMenu(
    restaurantId: string,
    data: unknown,
    branchId?: string | null,
    ttl = this.defaultTtl,
  ): Promise<void> {
    const key = this.menuKey(restaurantId, branchId);
    await this.client.set(key, JSON.stringify(data), 'EX', ttl);
  }

  async invalidateMenu(
    restaurantId: string,
    branchId?: string | null,
  ): Promise<void> {
    const key = this.menuKey(restaurantId, branchId);
    await this.client.del(key);
    this.logger.debug(`Invalidated cache key: ${key}`);
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.quit();
  }
}
