// services/api-gateway/src/health/health.controller.ts
import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { Public } from '../auth/decorators/public.decorator';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  // ─────────────────────────────────────────
  // Public endpoint — no JWT required
  // Used by Docker, load balancers, Traefik
  // ─────────────────────────────────────────
  @Public()
  @Get()
  check() {
    return this.healthService.check();
  }
}
