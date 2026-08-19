// services/inventory-service/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';
import { UnitsModule } from './units/units.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { WarehousesModule } from './warehouses/warehouses.module';
import { StockModule } from './stock/stock.module';
import { MovementsModule } from './movements/movements.module';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalExceptionFilter, ResponseInterceptor } from './common';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { AuthModule } from './common/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'generated/schema.gql'),
      sortSchema: true,
      context: ({ req }: { req: Request }) => ({ req }),
      playground: process.env.NODE_ENV !== 'production',
    }),
    AuthModule,
    PrismaModule,
    EventsModule,
    UnitsModule,
    SuppliersModule,
    IngredientsModule,
    WarehousesModule,
    StockModule,
    MovementsModule,
    HealthModule,
    MetricsModule,
  ],
  controllers: [],
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
