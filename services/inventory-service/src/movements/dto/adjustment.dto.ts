// services/inventory-service/src/movements/dto/adjustment.dto.ts
import {
  IsUUID,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsNumberString,
  IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AdjustmentLineDto {
  @IsUUID() ingredientId!: string;
  @IsNumberString() quantity!: string; // positive = add, negative = remove
  @IsString() @IsOptional() notes?: string;
}

export class CreateAdjustmentDto {
  @IsUUID() restaurantId!: string;
  @IsUUID() warehouseId!: string;

  @IsString()
  @IsOptional()
  reason?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdjustmentLineDto)
  lines!: AdjustmentLineDto[];
}
