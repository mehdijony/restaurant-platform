// services/api-gateway/src/main.ts
import 'dotenv/config'; // ← MUST be the absolute first line before ANY other import

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter, ResponseInterceptor } from './common';

async function bootstrap(): Promise<void> {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.enableCors();

  const port = parseInt(process.env['PORT'] ?? '3000', 10);
  await app.listen(port);
  logger.log(`API Gateway running on port ${port}`);
}

bootstrap().catch((err: unknown) => {
  console.error('Failed to start api-gateway:', err);
  process.exit(1);
});
