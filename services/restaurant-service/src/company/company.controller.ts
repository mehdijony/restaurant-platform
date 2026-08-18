// src/company/company.controller.ts
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../common/interfaces/jwt-payload.interface';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // ─────────────────────────────────────────
  // POST /companies
  // Only SUPER_ADMIN can create companies
  // ─────────────────────────────────────────
  @Post()
  @Roles('SUPER_ADMIN')
  create(
    @Body() dto: CreateCompanyDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.companyService.create(dto);
  }

  // ─────────────────────────────────────────
  // GET /companies
  // SUPER_ADMIN sees all companies
  // ─────────────────────────────────────────
  @Get()
  @Roles('SUPER_ADMIN')
  findAll() {
    return this.companyService.findAll();
  }

  // ─────────────────────────────────────────
  // GET /companies/:id
  // ─────────────────────────────────────────
  @Get(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  // ─────────────────────────────────────────
  // PATCH /companies/:id
  // ─────────────────────────────────────────
  @Patch(':id')
  @Roles('SUPER_ADMIN', 'COMPANY_ADMIN')
  update(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
    return this.companyService.update(id, dto);
  }

  // ─────────────────────────────────────────
  // DELETE /companies/:id
  // Only SUPER_ADMIN can delete companies
  // ─────────────────────────────────────────
  @Delete(':id')
  @Roles('SUPER_ADMIN')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
