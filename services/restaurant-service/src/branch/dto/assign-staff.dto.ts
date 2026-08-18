// src/branch/dto/assign-staff.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AssignStaffDto {
  @ApiProperty()
  @IsString()
  userId!: string;

  @ApiProperty()
  @IsString()
  role!: string;
}
