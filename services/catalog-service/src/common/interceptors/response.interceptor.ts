import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GqlContextType } from '@nestjs/graphql'; // ← add this

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

function isPaginatedResult<T>(obj: unknown): obj is {
  data: T[];
  total: number;
  page: number;
  limit: number;
} {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'data' in obj &&
    'total' in obj &&
    'page' in obj &&
    'limit' in obj &&
    Array.isArray((obj as any).data) &&
    typeof (obj as any).total === 'number' &&
    typeof (obj as any).page === 'number' &&
    typeof (obj as any).limit === 'number'
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
  ApiResponse<T> | PaginatedApiResponse<T> | T // ← add T to union
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiResponse<T> | PaginatedApiResponse<T> | T> {
    // ← add T to union

    // ─── Skip for GraphQL — return raw resolver value ──────────
    if (context.getType<GqlContextType>() === 'graphql') {
      return next.handle(); // ← no wrapping, pass through as-is
    }

    // ─── REST only below ───────────────────────────────────────
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<{ statusCode: number }>();

    return next.handle().pipe(
      map((result) => {
        const statusCode = response.statusCode;

        // Check if this is a paginated result
        if (isPaginatedResult(result)) {
          const { data, total, page, limit } = result;
          return {
            success: statusCode,
            message: getDefaultMessage(statusCode),
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            data,
          } as PaginatedApiResponse<T>;
        }

        // Check if this is a message-only response
        if (
          typeof result === 'object' &&
          result !== null &&
          'message' in result &&
          Object.keys(result).length === 1
        ) {
          return {
            success: statusCode,
            message: (result as { message: string }).message,
            data: null,
          } as ApiResponse<T>;
        }

        // Default response
        return {
          success: statusCode,
          message: getDefaultMessage(statusCode),
          data: result ?? null,
        } as ApiResponse<T>;
      }),
    );
  }
}
