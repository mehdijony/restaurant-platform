// src/common/interfaces/jwt-payload.interface.ts
export interface KeycloakRealmAccess {
  roles: string[];
}

export interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
  jti: string;
  iss: string;
  azp: string;
  typ: string;
  preferred_username: string;
  email: string;
  email_verified: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  realm_access: KeycloakRealmAccess;
  scope: string;
}

export interface AuthenticatedUser {
  id: string;
  username: string;
  email: string;
  roles: string[];
  name?: string;
}
