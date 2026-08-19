// services/inventory-service/src/movements/dto/receipt.dto.ts
import {
  IsUUID,
  IsString,
  IsOptional,
  IsISO8601,
  IsNumberString,
  IsArray,
  ValidateNested,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiptLineDto {
  @IsUUID() ingredientId!: string;
  @IsNumberString() quantity!: string;
  @IsNumberString() @IsOptional() unitCost?: string;
  @IsString() @IsOptional() lotNumber?: string;
  @IsISO8601() @IsOptional() lotExpiresAt?: string;
  @IsUUID() @IsOptional() lotId?: string;
}

export class CreateReceiptDto {
  @IsUUID() restaurantId!: string;
  @IsUUID() supplierId!: string;
  @IsUUID() warehouseId!: string;

  @IsString() @IsOptional() invoiceNo?: string;
  @IsISO8601() @IsOptional() invoiceDate?: string;

  @IsNumberString() totalAmount!: string;
  @IsString() @IsOptional() currency?: string;
  @IsString() @IsOptional() notes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiptLineDto)
  lines!: ReceiptLineDto[];
}
