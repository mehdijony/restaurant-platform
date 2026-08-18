// services/api-gateway/src/auth/decorators/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';

// ─────────────────────────────────────────
// Mark a route as requiring specific roles
// Usage: @Roles('SUPER_ADMIN', 'MANAGER')
// ─────────────────────────────────────────

export const ROLES_KEY = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
