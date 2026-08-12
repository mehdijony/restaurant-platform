import { Controller, Get } from '@nestjs/common';

interface HealthResponse {
  status: string;
  service: string;
  timestamp: string;
}

@Controller('health')
export class HealthController {
  @Get()
  check(): HealthResponse {
    return {
      status: 'ok',
      service: 'api-gateway',
      timestamp: new Date().toISOString(),
    };
  }
}
