// services/inventory-service/src/stock/stock.module.ts
import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { StockResolver } from './stock.resolver';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [EventsModule],
  providers: [StockService, StockResolver],
  controllers: [StockController],
  exports: [StockService],
})
export class StockModule {}
