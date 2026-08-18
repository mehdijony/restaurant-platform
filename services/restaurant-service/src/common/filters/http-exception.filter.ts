import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

// ─────────────────────────────────────────────────────────
// GlobalExceptionFilter
// Catches ALL exceptions and returns a consistent JSON shape
//
// Response shape:
// {
//   statusCode : number
//   error     : string
//   message   : string | string[]
//   path      : string
//   timestamp : string
// }
// ─────────────────────────────────────────────────────────

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // ── Determine status code ──────────────────────────────
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // ── Extract message ────────────────────────────────────
    let message: string | string[] = 'Internal server error';

    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null
      ) {
        const body = exceptionResponse as Record<string, unknown>;
        message = (body.message as string | string[]) ?? exception.message;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    // ── Log internal errors ────────────────────────────────
    if (status >= 500) {
      this.logger.error(
        `[${request.method}] ${request.url} → ${status}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    } else {
      this.logger.warn(
        `[${request.method}] ${request.url} → ${status} | ${JSON.stringify(message)}`,
      );
    }

    // ── Send structured error response ─────────────────────
    response.status(status).json({
      statusCode: status,
      error: HttpStatus[status] ?? 'UNKNOWN',
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
