import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

interface ExceptionResponse {
  message?: string | string[];
  error?: string;
  statusCode?: number;
}

interface ExpressResponse {
  status: (code: number) => ExpressResponse;
  json: (body: unknown) => void;
}

interface ExpressRequest {
  url: string;
  method: string;
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<ExpressResponse>();
    const request = ctx.getRequest<ExpressRequest>();

    let status: number;
    let message: string;
    let errors: string[] | null = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else {
        const res = exceptionResponse as ExceptionResponse;
        if (Array.isArray(res.message)) {
          message = 'Validation failed';
          errors = res.message;
        } else {
          message = res.message ?? exception.message;
        }
      }

      if (status >= 500) {
        this.logger.error(
          `${request.method} ${request.url} → ${status}: ${message}`,
          exception.stack,
        );
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
      this.logger.error(
        `${request.method} ${request.url} → Unhandled exception:`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    const body: Record<string, unknown> = {
      success: status,
      message,
      data: null,
    };

    if (errors) {
      body['errors'] = errors;
    }

    response.status(status).json(body);
  }
}
