// services/catalog-service/src/pricing/pricing.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PricingService } from './pricing.service';
import { UpsertPriceDto } from './dto/upsert-price.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('pricing')
@UseGuards(JwtAuthGuard)
export class PricingController {
  constructor(private readonly service: PricingService) {}

  @Post()
  upsert(
    @Query('restaurantId') restaurantId: string,
    @Body() dto: UpsertPriceDto,
  ) {
    return this.service.upsertPrice(restaurantId, dto);
  }

  @Get(':menuItemId')
  getPrices(
    @Param('menuItemId') menuItemId: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.getPricesForItem(menuItemId, restaurantId);
  }
}
