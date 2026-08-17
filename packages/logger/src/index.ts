export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  message: string;
  service: string;
  timestamp: string;
  traceId?: string;
  [key: string]: unknown;
}

export class Logger {
  constructor(private readonly service: string) {}

  private write(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    const entry: LogEntry = {
      level,
      message,
      service: this.service,
      timestamp: new Date().toISOString(),
      ...meta,
    };
    console.log(JSON.stringify(entry));
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    this.write('debug', message, meta);
  }

  info(message: string, meta?: Record<string, unknown>): void {
    this.write('info', message, meta);
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    this.write('warn', message, meta);
  }

  error(message: string, meta?: Record<string, unknown>): void {
    this.write('error', message, meta);
  }
}

export function createLogger(service: string): Logger {
  return new Logger(service);
}
