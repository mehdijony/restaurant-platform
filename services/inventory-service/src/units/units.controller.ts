// services/inventory-service/src/units/units.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { IsUUID, IsString, IsNumberString } from 'class-validator';

class AddConversionDto {
  @IsUUID() toUnitId!: string;
  @IsNumberString() factor!: string;
}

@Controller('units')
@UseGuards(JwtAuthGuard)
export class UnitsController {
  constructor(private readonly svc: UnitsService) {}

  @Post()
  create(@Body() dto: CreateUnitDto) {
    return this.svc.create(dto);
  }

  @Get()
  findAll(@Query('restaurantId') restaurantId: string) {
    return this.svc.findAll(restaurantId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }

  @Post(':id/conversions')
  addConversion(
    @Param('id') fromUnitId: string,
    @Query('restaurantId') restaurantId: string,
    @Body() body: AddConversionDto,
  ) {
    return this.svc.addConversion(
      fromUnitId,
      body.toUnitId,
      body.factor,
      restaurantId,
    );
  }
}
