// services/inventory-service/src/stock/dto/stock-query.dto.ts
import { IsUUID, IsOptional } from 'class-validator';

export class StockQueryDto {
  @IsUUID() restaurantId!: string;
  @IsUUID() @IsOptional() warehouseId?: string;
  @IsUUID() @IsOptional() ingredientId?: string;
}
