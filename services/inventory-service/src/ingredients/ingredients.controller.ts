// services/inventory-service/src/ingredients/ingredients.controller.ts
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
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('ingredients')
@UseGuards(JwtAuthGuard)
export class IngredientsController {
  constructor(private readonly svc: IngredientsService) {}

  @Post()
  create(@Body() dto: CreateIngredientDto) {
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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
    @Body() dto: UpdateIngredientDto,
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
