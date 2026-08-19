// services/inventory-service/src/movements/movements.module.ts
import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';
import { MovementsResolver } from './movements.resolver';
import { StockModule } from '../stock/stock.module';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [StockModule, EventsModule],
  providers: [MovementsService, MovementsResolver],
  controllers: [MovementsController],
  exports: [MovementsService],
})
export class MovementsModule {}
