// services/inventory-service/src/movements/dto/transfer.dto.ts
import {
  IsUUID,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsNumberString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TransferLineDto {
  @IsUUID() ingredientId!: string;
  @IsNumberString() quantity!: string;
}

export class CreateTransferDto {
  @IsUUID() restaurantId!: string;
  @IsUUID() fromWarehouseId!: string;
  @IsUUID() toWarehouseId!: string;

  @IsString() @IsOptional() notes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransferLineDto)
  lines!: TransferLineDto[];
}
