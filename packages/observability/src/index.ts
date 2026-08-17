export interface TraceContext {
  traceId: string;
  spanId: string;
  service: string;
}

export function generateTraceId(): string {
  return Math.random().toString(36).substring(2, 18) + Math.random().toString(36).substring(2, 18);
}

export function generateSpanId(): string {
  return Math.random().toString(36).substring(2, 10);
}
