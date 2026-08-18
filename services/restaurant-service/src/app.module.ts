import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './common/auth.module';
import { HealthModule } from './health/health.module';
import { CompanyModule } from './company/company.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { BranchModule } from './branch/branch.module';

import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common';

@Module({
  imports: [
    // ─── Load .env variables globally ─────────────────────
    // isGlobal: true  → no need to import ConfigModule in other modules
    // expandVariables → support ${VAR} syntax in .env
    // ──────────────────────────────────────────────────────
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),

    // ─── Core infrastructure ───────────────────────────────
    PrismaModule,
    AuthModule,

    // ─── Feature modules ───────────────────────────────────
    HealthModule,
    CompanyModule,
    RestaurantModule,
    BranchModule,
  ],

  providers: [
    // ─────────────────────────────────────────────────────
    // ORDER MATTERS:
    // 1. JwtAuthGuard runs first  → validates & attaches user
    // 2. RolesGuard runs second   → checks roles on request.user
    // ─────────────────────────────────────────────────────
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },

    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    // ─── Global response interceptor ───────────────────────
    {
      provide: APP_INTERCEPTOR, // ← Add this
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
