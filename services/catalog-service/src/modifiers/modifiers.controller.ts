// services/catalog-service/src/modifiers/modifiers.controller.ts
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
import { ModifiersService } from './modifiers.service';
import {
  CreateModifierGroupDto,
  CreateModifierOptionDto,
} from './dto/create-modifier-group.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('modifiers')
@UseGuards(JwtAuthGuard)
export class ModifiersController {
  constructor(private readonly service: ModifiersService) {}

  @Post('groups')
  createGroup(@Body() dto: CreateModifierGroupDto) {
    return this.service.createGroup(dto);
  }

  @Get('groups')
  findAllGroups(@Query('restaurantId') restaurantId: string) {
    return this.service.findAllGroups(restaurantId);
  }

  @Get('groups/:id')
  findOneGroup(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.findOneGroup(id, restaurantId);
  }

  @Delete('groups/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteGroup(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.deleteGroup(id, restaurantId);
  }

  @Post('groups/:id/options')
  addOption(
    @Param('id') groupId: string,
    @Query('restaurantId') restaurantId: string,
    @Body() dto: CreateModifierOptionDto,
  ) {
    return this.service.addOption(groupId, restaurantId, dto);
  }

  @Delete('groups/:groupId/options/:optionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeOption(
    @Param('groupId') groupId: string,
    @Param('optionId') optionId: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.service.removeOption(groupId, optionId, restaurantId);
  }
}
