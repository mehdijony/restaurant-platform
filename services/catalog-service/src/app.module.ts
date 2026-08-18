// services/catalog-service/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalExceptionFilter, ResponseInterceptor } from './common';
import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';
import { CacheModule } from './cache/cache.module';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';
import { ModifiersModule } from './modifiers/modifiers.module';
import { MenusModule } from './menus/menus.module';
import { PricingModule } from './pricing/pricing.module';
import { AvailabilityModule } from './availability/availability.module';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'generated/schema.gql'),
      sortSchema: true,
      context: ({ req }: { req: Request }) => ({ req }),
      playground: process.env.NODE_ENV !== 'production',
    }),

    PrismaModule,
    EventsModule,
    CacheModule,
    CategoriesModule,
    ItemsModule,
    ModifiersModule,
    MenusModule,
    PricingModule,
    AvailabilityModule,
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
