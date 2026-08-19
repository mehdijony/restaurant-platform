// services/inventory-service/src/suppliers/suppliers.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('suppliers')
@UseGuards(JwtAuthGuard)
export class SuppliersController {
  constructor(private readonly svc: SuppliersService) {}

  @Post()
  create(@Body() dto: CreateSupplierDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll(
    @Query('restaurantId') restaurantId: string,
    @Query('includeInactive') includeInactive?: string,
  ) {
    return this.svc.findAll(restaurantId, includeInactive === 'true');
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
    @Body() dto: UpdateSupplierDto,
  ) {
    return this.svc.update(id, restaurantId, dto);
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
