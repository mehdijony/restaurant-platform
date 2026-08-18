// services/catalog-service/src/availability/availability.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { UpsertAvailabilityDto } from './dto/upsert-availability.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('availability')
@UseGuards(JwtAuthGuard)
export class AvailabilityController {
  constructor(private readonly service: AvailabilityService) {}

  @Post()
  upsert(
    @Query('restaurantId') restaurantId: string,
    @Body() dto: UpsertAvailabilityDto,
  ) {
    return this.service.upsert(restaurantId, dto);
  }

  @Get(':menuItemId')
  getForItem(
    @Param('menuItemId') menuItemId: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.getForItem(menuItemId, restaurantId);
  }
}
