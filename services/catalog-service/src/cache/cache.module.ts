// services/catalog-service/src/cache/cache.module.ts
import { Module, Global } from '@nestjs/common';
import { MenuCacheService } from './menu-cache.service';

@Global()
@Module({
  providers: [MenuCacheService],
  exports: [MenuCacheService],
})
export class CacheModule {}
