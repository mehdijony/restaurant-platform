// services/inventory-service/src/warehouses/warehouses.controller.ts
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('warehouses')
@UseGuards(JwtAuthGuard)
export class WarehousesController {
  constructor(private readonly svc: WarehousesService) {}

  @Post()
  create(@Body() dto: CreateWarehouseDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll(
    @Query('restaurantId') restaurantId: string,
    @Query('branchId') branchId?: string,
  ) {
    return this.svc.findAll(restaurantId, branchId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deactivate(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.svc.deactivate(id, restaurantId);
  }
}
