// services/inventory-service/src/movements/dto/waste.dto.ts
import {
  IsUUID,
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsNumberString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class WasteLineDto {
  @IsUUID() ingredientId!: string;
  @IsNumberString() quantity!: string;
  @IsString() @IsOptional() reason?: string;
}

export class CreateWasteDto {
  @IsUUID() restaurantId!: string;
  @IsUUID() warehouseId!: string;

  @IsString() @IsOptional() notes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WasteLineDto)
  lines!: WasteLineDto[];
}
