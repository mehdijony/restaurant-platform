// services/catalog-service/src/pricing/dto/upsert-price.dto.ts
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsISO8601,
  IsNumberString,
} from 'class-validator';

export class UpsertPriceDto {
  @IsUUID()
  menuItemId!: string;

  @IsUUID()
  @IsOptional()
  branchId?: string;

  @IsString()
  @IsOptional()
  label?: string;

  @IsNumberString()
  amount!: string; // decimal string  e.g. "9.99"

  @IsString()
  @IsOptional()
  currency?: string;

  @IsBoolean()
  @IsOptional()
  isDefault?: boolean;

  @IsISO8601()
  @IsOptional()
  validFrom?: string;

  @IsISO8601()
  @IsOptional()
  validUntil?: string;
}
