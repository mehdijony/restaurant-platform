// src/branch/branch.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CreateOperatingHoursDto } from './dto/create-operating-hours.dto';
import { AssignStaffDto } from './dto/assign-staff.dto';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('branches')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post()
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN')
  create(@Body() dto: CreateBranchDto) {
    return this.branchService.create(dto);
  }

  @Get()
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  findAll(@Query('restaurantId') restaurantId?: string) {
    return this.branchService.findAll(restaurantId);
  }

  @Get(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  findOne(@Param('id') id: string) {
    return this.branchService.findOne(id);
  }

  @Patch(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  update(@Param('id') id: string, @Body() dto: UpdateBranchDto) {
    return this.branchService.update(id, dto);
  }

  @Delete(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN')
  remove(@Param('id') id: string) {
    return this.branchService.remove(id);
  }

  // ─────────────────────────────────────────
  // Operating Hours
  // ─────────────────────────────────────────

  @Post(':id/operating-hours')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  setOperatingHours(
    @Param('id') id: string,
    @Body() body: { hours: CreateOperatingHoursDto[] },
  ) {
    return this.branchService.setOperatingHours(id, body.hours);
  }

  @Get(':id/operating-hours')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  getOperatingHours(@Param('id') id: string) {
    return this.branchService.getOperatingHours(id);
  }

  // ─────────────────────────────────────────
  // Staff
  // ─────────────────────────────────────────

  @Post(':id/staff')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  assignStaff(@Param('id') id: string, @Body() dto: AssignStaffDto) {
    return this.branchService.assignStaff(id, dto);
  }

  @Get(':id/staff')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  getStaff(@Param('id') id: string) {
    return this.branchService.getStaff(id);
  }

  @Delete(':id/staff/:userId')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN', 'RESTAURANT_ADMIN', 'MANAGER')
  removeStaff(@Param('id') id: string, @Param('userId') userId: string) {
    return this.branchService.removeStaff(id, userId);
  }
}
