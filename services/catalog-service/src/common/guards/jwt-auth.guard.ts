import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import jwksRsa = require('jwks-rsa');

export interface JwtUser extends jwt.JwtPayload {
  sub: string;
  email?: string;
  restaurantId?: string;
  roles?: string[];
  realm_access?: { roles: string[] };
  resource_access?: Record<string, { roles: string[] }>;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly jwks: ReturnType<typeof jwksRsa>;

  constructor(private readonly config: ConfigService) {
    this.jwks = jwksRsa({
      jwksUri: this.config.get<string>(
        'KEYCLOAK_JWKS_URI',
        'http://localhost:8080/realms/restaurant/protocol/openid-connect/certs',
      ),
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
    });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context);
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException('Missing token');
    }

    const user = await this.verify(token);
    request['user'] = user;
    return true;
  }

  private getRequest(context: ExecutionContext): Record<string, unknown> {
    if (context.getType<string>() === 'graphql') {
      const ctx = GqlExecutionContext.create(context);
      return ctx.getContext<{ req: Record<string, unknown> }>().req;
    }

    return context.switchToHttp().getRequest();
  }

  private extractToken(req: Record<string, unknown>): string | null {
    const headers = req['headers'] as Record<string, string> | undefined;
    const auth = headers?.authorization ?? headers?.Authorization ?? '';
    return auth.startsWith('Bearer ') ? auth.slice(7) : null;
  }

  private async verify(token: string): Promise<JwtUser> {
    return new Promise((resolve, reject) => {
      const decoded = jwt.decode(token, { complete: true });

      if (!decoded || typeof decoded === 'string') {
        return reject(new UnauthorizedException('Invalid token'));
      }

      const kid = decoded.header?.kid;
      if (!kid) {
        return reject(new UnauthorizedException('Missing key id'));
      }

      this.jwks.getSigningKey(kid, (err, key) => {
        if (err || !key) {
          return reject(new UnauthorizedException('Unknown signing key'));
        }

        const publicKey = key.getPublicKey();

        jwt.verify(
          token,
          publicKey,
          { algorithms: ['RS256'] },
          (verifyErr, payload) => {
            if (verifyErr || !payload || typeof payload === 'string') {
              return reject(
                new UnauthorizedException('Token verification failed'),
              );
            }

            resolve(payload as JwtUser);
          },
        );
      });
    });
  }
}
