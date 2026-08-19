// services/inventory-service/src/ingredients/dto/create-ingredient.dto.ts
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  MinLength,
  MaxLength,
  IsNumberString,
} from 'class-validator';

export class CreateIngredientDto {
  @IsUUID()
  restaurantId!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(180)
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsUUID()
  unitId!: string;

  @IsString()
  @IsOptional()
  @MaxLength(60)
  sku?: string;

  @IsString()
  @IsOptional()
  @MaxLength(60)
  barcode?: string;

  @IsNumberString()
  @IsOptional()
  reorderPoint?: string; // decimal string

  @IsNumberString()
  @IsOptional()
  reorderQuantity?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
