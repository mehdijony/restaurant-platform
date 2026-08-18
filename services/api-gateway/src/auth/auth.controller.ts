// services/api-gateway/src/auth/auth.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthenticatedUser } from './interfaces/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  // ─────────────────────────────────────────
  // Public — no token required
  // ─────────────────────────────────────────
  @Public()
  @Get('ping')
  ping() {
    return {
      status: 'ok',
      message: 'Auth service reachable',
      timestamp: new Date().toISOString(),
    };
  }

  // ─────────────────────────────────────────
  // Protected — any valid JWT required
  // ─────────────────────────────────────────
  @Get('me')
  getMe(@CurrentUser() user: AuthenticatedUser) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      roles: user.roles,
      name: user.name,
    };
  }

  // ─────────────────────────────────────────
  // Protected — SUPER_ADMIN role required
  // ─────────────────────────────────────────
  @Get('admin-only')
  @Roles('SUPER_ADMIN')
  adminOnly(@CurrentUser() user: AuthenticatedUser) {
    return {
      message: 'You have SUPER_ADMIN access',
      user: user.username,
    };
  }

  // ─────────────────────────────────────────
  // Protected — MANAGER or SUPER_ADMIN
  // ─────────────────────────────────────────
  @Get('manager-only')
  @Roles('MANAGER', 'SUPER_ADMIN')
  managerOnly(@CurrentUser() user: AuthenticatedUser) {
    return {
      message: 'You have MANAGER or SUPER_ADMIN access',
      user: user.username,
    };
  }
}
