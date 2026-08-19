// services/inventory-service/src/main.ts
import 'reflect-metadata';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('InventoryService');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const port = process.env.PORT ?? 3004;
  await app.listen(port);
  logger.log(`Inventory Service listening on port ${port}`);
}

bootstrap();
