// src/restaurant/restaurant.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../common/interfaces/jwt-payload.interface';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN')
  create(
    @Body() dto: CreateRestaurantDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.restaurantService.create(dto);
  }

  @Get()
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  findAll(@Query('companyId') companyId?: string) {
    return this.restaurantService.findAll(companyId);
  }

  @Get(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @Patch(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN')
  update(@Param('id') id: string, @Body() dto: UpdateRestaurantDto) {
    return this.restaurantService.update(id, dto);
  }

  @Delete(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN')
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
