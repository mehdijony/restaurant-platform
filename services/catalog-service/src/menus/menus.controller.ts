// services/catalog-service/src/menus/menus.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('menus')
@UseGuards(JwtAuthGuard)
export class MenusController {
  constructor(private readonly service: MenusService) {}

  @Post()
  create(@Body() dto: CreateMenuDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query('restaurantId') restaurantId: string,
    @Query('branchId') branchId?: string,
  ) {
    return this.service.findAll(restaurantId, branchId);
  }

  @Get('published')
  getPublished(
    @Query('restaurantId') restaurantId: string,
    @Query('branchId') branchId?: string,
  ) {
    return this.service.getPublishedMenu(restaurantId, branchId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.findOne(id, restaurantId);
  }

  @Patch(':id/publish')
  publish(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.publish(id, restaurantId);
  }

  @Patch(':id/archive')
  archive(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.archive(id, restaurantId);
  }
}
