import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const port = parseInt(process.env.PORT ?? '3000', 10);

  await app.listen(port);

  console.log(
    JSON.stringify({
      level: 'info',
      message: `api-gateway running on port ${port}`,
      service: 'api-gateway',
      timestamp: new Date().toISOString(),
    }),
  );
}

bootstrap();
