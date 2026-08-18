// services/api-gateway/src/auth/guards/jwt-auth.guard.ts
import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

// ─────────────────────────────────────────
// Global JWT guard
// Checks IS_PUBLIC_KEY first
// If route is public → skip validation
// If route is protected → validate JWT
// ─────────────────────────────────────────

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Check if route is marked as public
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // Proceed with JWT validation
    return super.canActivate(context);
  }

  handleRequest<TUser>(err: Error, user: TUser): TUser {
    if (err || !user) {
      this.logger.warn('Unauthorized request: invalid or missing JWT');
      throw new UnauthorizedException(
        err?.message ?? 'Invalid or missing token',
      );
    }
    return user;
  }
}
