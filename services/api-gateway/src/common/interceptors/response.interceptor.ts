import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResponse<T> {
  success: number;
  message: string;
  data: T | null;
}

export interface PaginatedApiResponse<T> {
  success: number;
  message: string;
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: T[];
}

interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

function isPaginatedResult<T>(obj: unknown): obj is PaginatedResult<T> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'data' in obj &&
    'total' in obj &&
    'page' in obj &&
    'limit' in obj &&
    Array.isArray((obj as PaginatedResult<T>).data)
  );
}

function getDefaultMessage(statusCode: number): string {
  const messages: Record<number, string> = {
    200: 'Success',
    201: 'Created successfully',
    204: 'Deleted successfully',
  };
  return messages[statusCode] ?? 'Success';
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<
  T,
  ApiResponse<T> | PaginatedApiResponse<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiResponse<T> | PaginatedApiResponse<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<{ statusCode: number }>();

    return next.handle().pipe(
      map((result) => {
        const statusCode = response.statusCode;

        if (isPaginatedResult<unknown>(result)) {
          return {
            success: statusCode,
            message: getDefaultMessage(statusCode),
            page: result.page,
            limit: result.limit,
            total: result.total,
            totalPages: Math.ceil(result.total / result.limit),
            data: result.data,
          } as PaginatedApiResponse<T>;
        }

        if (
          typeof result === 'object' &&
          result !== null &&
          'message' in result &&
          Object.keys(result as object).length === 1
        ) {
          return {
            success: statusCode,
            message: (result as { message: string }).message,
            data: null,
          } as ApiResponse<T>;
        }

        return {
          success: statusCode,
          message: getDefaultMessage(statusCode),
          data: result ?? null,
        } as ApiResponse<T>;
      }),
    );
  }
}
