// services/inventory-service/src/warehouses/warehouses.module.ts
import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';

@Module({
  providers: [WarehousesService],
  controllers: [WarehousesController],
  exports: [WarehousesService],
})
export class WarehousesModule {}
