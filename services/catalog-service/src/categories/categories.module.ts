// services/catalog-service/src/categories/categories.module.ts
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoriesResolver } from './categories.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EventsModule } from 'src/events/events.module';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [PrismaModule, EventsModule, CacheModule],
  providers: [CategoriesService, CategoriesResolver],
  controllers: [CategoriesController],
  exports: [CategoriesService],
})
export class CategoriesModule {}
