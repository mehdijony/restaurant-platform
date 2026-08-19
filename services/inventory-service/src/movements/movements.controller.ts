// services/inventory-service/src/movements/movements.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateReceiptDto } from './dto/receipt.dto';
import { CreateAdjustmentDto } from './dto/adjustment.dto';
import { CreateTransferDto } from './dto/transfer.dto';
import { CreateWasteDto } from './dto/waste.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { JwtUser } from '../common/guards/jwt-auth.guard';

@Controller('inventory')
@UseGuards(JwtAuthGuard)
export class MovementsController {
  constructor(private readonly svc: MovementsService) {}

  // ── Receipts ─────────────────────────────────────────────────────────────

  @Post('receipts')
  createReceipt(
    @Body() dto: CreateReceiptDto,
    @Request() req: { user: JwtUser },
  ) {
    return this.svc.createReceipt(dto, req.user.sub);
  }

  // ── Adjustments ───────────────────────────────────────────────────────────

  @Post('adjustments')
  createAdjustment(
    @Body() dto: CreateAdjustmentDto,
    @Request() req: { user: JwtUser },
  ) {
    return this.svc.createAdjustment(dto, req.user.sub);
  }

  // ── Transfers ─────────────────────────────────────────────────────────────

  @Post('transfers')
  createTransfer(
    @Body() dto: CreateTransferDto,
    @Request() req: { user: JwtUser },
  ) {
    return this.svc.createTransfer(dto, req.user.sub);
  }

  // ── Waste ─────────────────────────────────────────────────────────────────

  @Post('waste')
  createWaste(@Body() dto: CreateWasteDto, @Request() req: { user: JwtUser }) {
    return this.svc.createWaste(dto, req.user.sub);
  }

  // ── Cancel ────────────────────────────────────────────────────────────────

  @Patch('movements/:id/cancel')
  cancel(@Param('id') id: string, @Query('restaurantId') restaurantId: string) {
    return this.svc.cancelMovement(id, restaurantId);
  }

  // ── Queries ───────────────────────────────────────────────────────────────

  @Get('movements')
  findAll(
    @Query('restaurantId') restaurantId: string,
    @Query('type') type?: string,
    @Query('warehouseId') warehouseId?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.svc.findAll(
      restaurantId,
      type,
      warehouseId,
      limit ? parseInt(limit, 10) : 50,
      offset ? parseInt(offset, 10) : 0,
    );
  }

  @Get('movements/:id')
  findOne(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.svc.findOne(id, restaurantId);
  }
}
