// services/catalog-service/src/items/items.module.ts
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemsResolver } from './items.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EventsModule } from 'src/events/events.module';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [PrismaModule, EventsModule, CacheModule],
  providers: [ItemsService, ItemsResolver],
  controllers: [ItemsController],
  exports: [ItemsService],
})
export class ItemsModule {}
