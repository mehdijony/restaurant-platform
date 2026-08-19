// services/inventory-service/src/suppliers/suppliers.module.ts
import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { SuppliersResolver } from './suppliers.resolver';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [EventsModule],
  providers: [SuppliersService, SuppliersResolver],
  controllers: [SuppliersController],
  exports: [SuppliersService],
})
export class SuppliersModule {}
