// services/inventory-service/src/units/dto/create-unit.dto.ts
import {
  IsString,
  IsBoolean,
  IsOptional,
  IsUUID,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUnitDto {
  @IsUUID()
  restaurantId!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(60)
  name!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(10)
  abbreviation!: string;

  @IsBoolean()
  @IsOptional()
  isBase?: boolean;
}
