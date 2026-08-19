// services/inventory-service/src/warehouses/dto/create-warehouse.dto.ts
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateWarehouseDto {
  @IsUUID() restaurantId!: string;
  @IsUUID() @IsOptional() branchId?: string;

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
  isActive?: boolean;
}
