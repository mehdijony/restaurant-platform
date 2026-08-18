import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

// ─────────────────────────────────────────────────────────
// JwtAuthGuard — applied globally via APP_GUARD
//
// Flow:
//  1. Check if route has @Public() decorator → skip auth
//  2. Otherwise → validate Bearer token via JwtStrategy
//  3. On success → request.user = AuthenticatedUser
//  4. On failure → throw 401 UnauthorizedException
// ─────────────────────────────────────────────────────────

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // ── Check for @Public() on handler or controller class ─
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      this.logger.debug('Public route — skipping JWT validation');
      return true;
    }

    // ── Delegate to PassportJS JWT validation ─────────────
    return super.canActivate(context);
  }

  handleRequest<TUser>(err: Error, user: TUser): TUser {
    if (err || !user) {
      this.logger.warn(`Unauthorized: ${err?.message ?? 'No user in token'}`);
      throw new UnauthorizedException(
        err?.message ?? 'Invalid or missing token',
      );
    }
    return user;
  }
}
