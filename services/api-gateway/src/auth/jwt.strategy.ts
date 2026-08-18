// services/api-gateway/src/auth/jwt.strategy.ts
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import {
  JwtPayload,
  AuthenticatedUser,
} from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor() {
    const keycloakUrl = process.env.KEYCLOAK_URL ?? 'http://localhost:8080';
    const realm = process.env.KEYCLOAK_REALM ?? 'restaurant';

    const jwksUri = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/certs`;
    const issuer = `${keycloakUrl}/realms/${realm}`;

    super({
      // Fetch public keys from Keycloak JWKS endpoint
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri,
      }),

      // Extract token from Authorization: Bearer <token>
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // Validate the issuer matches your Keycloak realm
      issuer,

      // Keycloak uses RS256 algorithm
      algorithms: ['RS256'],
    });
  }

  // ─────────────────────────────────────────
  // This runs after the JWT signature is verified
  // Return value is attached to request.user
  // ─────────────────────────────────────────

  validate(payload: JwtPayload): AuthenticatedUser {
    this.logger.debug(
      `Validating token for user: ${payload.preferred_username}`,
    );

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
