// services/catalog-service/src/modifiers/dto/create-modifier-group.dto.ts
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  IsUUID,
  MinLength,
  MaxLength,
  Min,
  Max,
  ValidateNested,
  IsArray,
  IsNumberString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateModifierOptionDto {
  @IsString()
  @MinLength(1)
  @MaxLength(120)
  name!: string;

  @IsNumberString()
  @IsOptional()
  additionalPrice?: string; // decimal string

  @IsBoolean()
  @IsOptional()
  isDefault?: boolean;

  @IsInt()
  @Min(0)
  @IsOptional()
  sortOrder?: number;
}

export class CreateModifierGroupDto {
  @IsUUID()
  restaurantId!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(120)
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @IsBoolean()
  @IsOptional()
  isRequired?: boolean;

  @IsInt()
  @Min(0)
  @IsOptional()
  minSelections?: number;

  @IsInt()
  @Min(1)
  @Max(20)
  @IsOptional()
  maxSelections?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateModifierOptionDto)
  @IsOptional()
  options?: CreateModifierOptionDto[];
}
