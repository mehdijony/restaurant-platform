// src/branch/dto/create-operating-hours.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateOperatingHoursDto {
  @ApiProperty()
  @IsString()
  day!:
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY';

  @ApiProperty()
  @IsString()
  openTime!: string;

  @ApiProperty()
  @IsString()
  closeTime!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isClosed?: boolean;
}
