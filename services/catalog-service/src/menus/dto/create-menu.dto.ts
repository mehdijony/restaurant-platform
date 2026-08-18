// services/catalog-service/src/menus/dto/create-menu.dto.ts
import {
  IsString,
  IsOptional,
  IsUUID,
  MinLength,
  MaxLength,
  IsArray,
  ValidateNested,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class MenuSectionItemDto {
  @IsUUID()
  menuItemId!: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  sortOrder?: number;
}

export class MenuSectionDto {
  @IsUUID()
  categoryId!: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  sortOrder?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MenuSectionItemDto)
  @IsOptional()
  items?: MenuSectionItemDto[];
}

export class CreateMenuDto {
  @IsUUID()
  restaurantId!: string;

  @IsUUID()
  @IsOptional()
  branchId?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(180)
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MenuSectionDto)
  @IsOptional()
  sections?: MenuSectionDto[];
}
