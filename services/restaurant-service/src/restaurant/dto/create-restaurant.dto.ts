// src/restaurant/dto/create-restaurant.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
export class CreateRestaurantDto {
  @ApiProperty()
  @IsString()
  companyId!: string;

  @ApiProperty()
  @IsString()
  name!: string;

  @ApiProperty()
  @IsString()
  slug!: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cuisineType?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bannerUrl?: string;

  @ApiProperty({ enum: ['ACTIVE', 'INACTIVE', 'TEMPORARILY_CLOSED'] })
  @IsOptional()
  @IsEnum({
    values: ['ACTIVE', 'INACTIVE', 'TEMPORARILY_CLOSED'],
  })
  status?: 'ACTIVE' | 'INACTIVE' | 'TEMPORARILY_CLOSED';
}
