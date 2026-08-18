// services/api-gateway/src/auth/interfaces/jwt-payload.interface.ts
// ─────────────────────────────────────────
// Represents the decoded JWT from Keycloak
// ─────────────────────────────────────────

export interface KeycloakRealmAccess {
  roles: string[];
}

export interface JwtPayload {
  // Standard JWT claims
  sub: string;
  iat: number;
  exp: number;
  jti: string;

  // Keycloak specific
  iss: string;
  azp: string;
  typ: string;

  // User info
  preferred_username: string;
  email: string;
  email_verified: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;

  // Roles
  realm_access: KeycloakRealmAccess;

  // Scope
  scope: string;
}

// ─────────────────────────────────────────
// The user object attached to every request
// after successful JWT validation
// ─────────────────────────────────────────

export interface AuthenticatedUser {
  id: string;
  username: string;
  email: string;
  roles: string[];
  name?: string;
}
