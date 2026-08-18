// services/catalog-service/src/pricing/pricing.module.ts
import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingController } from './pricing.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EventsModule } from 'src/events/events.module';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [PrismaModule, EventsModule, CacheModule],
  providers: [PricingService],
  controllers: [PricingController],
  exports: [PricingService],
})
export class PricingModule {}
