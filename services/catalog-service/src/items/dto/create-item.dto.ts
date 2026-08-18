// services/catalog-service/src/items/dto/create-item.dto.ts
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  IsUUID,
  IsArray,
  IsUrl,
  MinLength,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateItemDto {
  @IsUUID()
  restaurantId!: string;

  @IsUUID()
  categoryId!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(180)
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsString()
  @IsOptional()
  sku?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  sortOrder?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  preparationTime?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  calories?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
