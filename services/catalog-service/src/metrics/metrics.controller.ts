// services/catalog-service/src/metrics/metrics.controller.ts
import { Controller, Get, Header } from '@nestjs/common';
import {
  Registry,
  collectDefaultMetrics,
  Counter,
  Histogram,
} from 'prom-client';

const registry = new Registry();
collectDefaultMetrics({ register: registry });

export const catalogRequestCounter = new Counter({
  name: 'catalog_requests_total',
  help: 'Total number of catalog API requests',
  labelNames: ['method', 'path', 'status'],
  registers: [registry],
});

export const catalogOperationDuration = new Histogram({
  name: 'catalog_operation_duration_seconds',
  help: 'Duration of catalog service operations',
  labelNames: ['operation'],
  buckets: [0.01, 0.05, 0.1, 0.25, 0.5, 1, 2.5],
  registers: [registry],
});

@Controller('metrics')
export class MetricsController {
  @Get()
  @Header('Content-Type', 'text/plain; version=0.0.4')
  async metrics(): Promise<string> {
    return registry.metrics();
  }
}
