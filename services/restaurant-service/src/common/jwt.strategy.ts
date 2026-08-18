import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import {
  JwtPayload,
  AuthenticatedUser,
} from './interfaces/jwt-payload.interface';

// ─────────────────────────────────────────────────────────
// JwtStrategy
// Validates Bearer tokens against Keycloak's JWKS endpoint
// After validation, attaches AuthenticatedUser to request.user
// ─────────────────────────────────────────────────────────

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor() {
    const keycloakUrl = process.env.KEYCLOAK_URL ?? 'http://localhost:8080';
    const realm = process.env.KEYCLOAK_REALM ?? 'restaurant';

    const jwksUri = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/certs`;
    const issuer = `${keycloakUrl}/realms/${realm}`;

    super({
      // ── Fetch public signing keys from Keycloak ──────────
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri,
      }),

      // ── Extract token from Authorization: Bearer <token> ─
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // ── Reject tokens from other realms/issuers ──────────
      issuer,

      // ── Keycloak signs with RS256 ─────────────────────────
      algorithms: ['RS256'],
    });

    this.logger.log(`JwtStrategy initialized`);
    this.logger.log(`JWKS URI : ${jwksUri}`);
    this.logger.log(`Issuer   : ${issuer}`);
  }

  // ──────────────────────────────────────────────────────
  // Called after signature verification passes
  // Return value → attached to request.user
  // Throw here   → results in 401 Unauthorized
  // ──────────────────────────────────────────────────────
  validate(payload: JwtPayload): AuthenticatedUser {
    this.logger.debug(`Token validated for: ${payload.preferred_username}`);

    if (!payload.sub) {
      throw new UnauthorizedException('Invalid token: missing subject');
    }

    if (!payload.realm_access?.roles) {
      throw new UnauthorizedException('Invalid token: missing realm roles');
    }

    const user: AuthenticatedUser = {
      id: payload.sub,
      username: payload.preferred_username,
      email: payload.email,
      roles: payload.realm_access.roles,
      name: payload.name,
    };

    return user;
  }
}
