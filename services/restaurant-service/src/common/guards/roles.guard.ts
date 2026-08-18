import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { AuthenticatedUser } from '../interfaces/jwt-payload.interface';

// ─────────────────────────────────────────────────────────
// RolesGuard — applied globally via APP_GUARD (after JwtAuthGuard)
//
// Flow:
//  1. Read required roles from @Roles() decorator
//  2. If no roles required → allow
//  3. Check request.user.roles against required roles
//  4. If no match → throw 403 ForbiddenException
// ─────────────────────────────────────────────────────────

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // ── Read roles from @Roles(...) decorator ──────────────
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // ── No roles required → let through ───────────────────
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // ── Get user from request (set by JwtAuthGuard) ────────
    const request = context.switchToHttp().getRequest();
    const user = request.user as AuthenticatedUser;

    if (!user) {
      // Should not reach here if JwtAuthGuard is applied first
      throw new ForbiddenException('No authenticated user found');
    }

    // ── Check if user has at least one required role ───────
    const hasRole = requiredRoles.some((role) => user.roles.includes(role));

    if (!hasRole) {
      this.logger.warn(
        `Access denied for "${user.username}" | ` +
          `Required: [${requiredRoles.join(', ')}] | ` +
          `Has: [${user.roles.join(', ')}]`,
      );
      throw new ForbiddenException(
        `Insufficient permissions. Required roles: ${requiredRoles.join(', ')}`,
      );
    }

    return true;
  }
}
