// services/inventory-service/src/stock/stock.controller.ts
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { StockService } from './stock.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('stock')
@UseGuards(JwtAuthGuard)
export class StockController {
  constructor(private readonly svc: StockService) {}

  @Get()
  getLevels(
    @Query('restaurantId') restaurantId: string,
    @Query('warehouseId') warehouseId?: string,
    @Query('ingredientId') ingredientId?: string,
  ) {
    return this.svc.getStockLevels(restaurantId, warehouseId, ingredientId);
  }

  @Get('lots')
  getLots(
    @Query('restaurantId') restaurantId: string,
    @Query('ingredientId') ingredientId?: string,
    @Query('warehouseId') warehouseId?: string,
  ) {
    return this.svc.getLots(restaurantId, ingredientId, warehouseId);
  }
}
