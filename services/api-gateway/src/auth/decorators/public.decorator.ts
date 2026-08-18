// services/api-gateway/src/auth/decorators/public.decorator.ts
import { SetMetadata } from '@nestjs/common';

// ─────────────────────────────────────────
// Mark a route as public (no JWT required)
// Usage: @Public()
// ─────────────────────────────────────────

export const IS_PUBLIC_KEY = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
