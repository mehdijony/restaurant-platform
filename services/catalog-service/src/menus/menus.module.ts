// services/catalog-service/src/menus/menus.module.ts
import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { MenusResolver } from './menus.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EventsModule } from 'src/events/events.module';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [PrismaModule, EventsModule, CacheModule],
  providers: [MenusService, MenusResolver],
  controllers: [MenusController],
  exports: [MenusService],
})
export class MenusModule {}
