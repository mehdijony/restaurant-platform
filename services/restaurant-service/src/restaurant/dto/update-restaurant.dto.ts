// src/restaurant/dto/update-restaurant.dto.ts
import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { CreateRestaurantDto } from './create-restaurant.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {}
