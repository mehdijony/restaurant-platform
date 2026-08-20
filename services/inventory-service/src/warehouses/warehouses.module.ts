// services/inventory-service/src/warehouses/warehouses.module.ts
import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { WarehousesResolver } from './warehouses.resolver';

@Module({
  providers: [WarehousesService, WarehousesResolver],
  controllers: [WarehousesController],
  exports: [WarehousesService],
})
export class WarehousesModule {}
