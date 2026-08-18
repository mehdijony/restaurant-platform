// services/catalog-service/src/items/items.controller.ts
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
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('items')
@UseGuards(JwtAuthGuard)
export class ItemsController {
  constructor(private readonly service: ItemsService) {}

  @Post()
  create(@Body() dto: CreateItemDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query('restaurantId') restaurantId: string,
    @Query('categoryId') categoryId?: string,
  ) {
    return this.service.findAll(restaurantId, categoryId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.findOne(id, restaurantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
    @Body() dto: UpdateItemDto,
  ) {
    return this.service.update(id, restaurantId, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @Query('restaurantId') restaurantId: string) {
    return this.service.remove(id, restaurantId);
  }

  @Post(':id/modifiers/:groupId')
  attachModifier(
    @Param('id') id: string,
    @Param('groupId') groupId: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.attachModifierGroup(id, restaurantId, groupId);
  }

  @Delete(':id/modifiers/:groupId')
  @HttpCode(HttpStatus.NO_CONTENT)
  detachModifier(
    @Param('id') id: string,
    @Param('groupId') groupId: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.detachModifierGroup(id, restaurantId, groupId);
  }
}
