// services/restaurant-service/src/main.ts
import 'dotenv/config'; // ← MUST be first line

import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    // Replace default logger with NestJS structured logger
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  // ─── Global validation pipe ────────────────────────────
  // whitelist     → strip properties not in DTO
  // transform     → auto-convert plain objects to DTO class instances
  // forbidNonWhitelisted → throw if unknown fields sent
  // ──────────────────────────────────────────────────────
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors();

  const port = parseInt(process.env.PORT ?? '3002', 10);

  await app.listen(port);

  logger.log(`🚀 restaurant-service running on http://localhost:${port}`);
  logger.log(`🌍 Environment: ${process.env.NODE_ENV ?? 'development'}`);
}

bootstrap();
