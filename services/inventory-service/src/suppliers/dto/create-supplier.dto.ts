// services/inventory-service/src/suppliers/dto/create-supplier.dto.ts
import {
  IsString,
  IsOptional,
  IsEmail,
  IsBoolean,
  IsUUID,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateSupplierDto {
  @IsUUID()
  restaurantId!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(180)
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(120)
  contactName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  @MaxLength(30)
  phone?: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  address?: string;

  @IsString()
  @IsOptional()
  @MaxLength(60)
  taxId?: string;

  @IsString()
  @IsOptional()
  @MaxLength(1000)
  notes?: string;
}
