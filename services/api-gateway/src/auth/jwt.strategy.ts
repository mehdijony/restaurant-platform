import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  roles: string[];
  firstName: string;
  lastName: string;
}

interface KeycloakJwtPayload {
  sub: string;
  email?: string;
  preferred_username: string;
  given_name?: string;
  family_name?: string;
  realm_access?: {
    roles: string[];
  };
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const keycloakUrl = process.env.KEYCLOAK_URL ?? 'http://localhost:8080';
    const realm = process.env.KEYCLOAK_REALM ?? 'restaurant';

    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${keycloakUrl}/realms/${realm}/protocol/openid-connect/certs`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: `${keycloakUrl}/realms/${realm}`,
      algorithms: ['RS256'],
    });
  }

  validate(payload: KeycloakJwtPayload): AuthUser {
    return {
      id: payload.sub,
      email: payload.email ?? '',
      username: payload.preferred_username,
      roles: payload.realm_access?.roles ?? [],
      firstName: payload.given_name ?? '',
      lastName: payload.family_name ?? '',
    };
  }
}
