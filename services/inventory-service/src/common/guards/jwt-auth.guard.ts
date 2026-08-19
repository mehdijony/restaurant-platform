// services/inventory-service/src/common/guards/jwt-auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';


export interface JwtUser {
  sub: string;
  email?: string;
  roles?: string[];
  realm_access?: { roles: string[] };
  resource_access?: Record<string, { roles: string[] }>;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly jwks: JwksClient;

  constructor(private readonly config: ConfigService) {
    this.jwks = new JwksClient({
      jwksUri: config.get<string>(
        'KEYCLOAK_JWKS_URI',
        'http://localhost:8080/realms/restaurant/protocol/openid-connect/certs',
      ),
      cache: true,
      rateLimit: true,
    });
  }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = this.getRequest(ctx);
    const token = this.extractToken(req);
    if (!token) throw new UnauthorizedException('Missing token');

    req['user'] = await this.verify(token);
    return true;
  }

  private getRequest(ctx: ExecutionContext): Record<string, unknown> {
    if (ctx.getType<string>() === 'graphql') {
      return GqlExecutionContext.create(ctx).getContext<{
        req: Record<string, unknown>;
      }>().req;
    }
    return ctx.switchToHttp().getRequest();
  }

  private extractToken(req: Record<string, unknown>): string | null {
    const headers = req['headers'] as Record<string, string> | undefined;
    const auth = headers?.['authorization'] ?? '';
    return auth.startsWith('Bearer ') ? auth.slice(7) : null;
  }

  private verify(token: string): Promise<JwtUser> {
    return new Promise((resolve, reject) => {
      const decoded = jwt.decode(token, { complete: true });
      if (!decoded || typeof decoded === 'string')
        return reject(new UnauthorizedException('Invalid token'));

      this.jwks.getSigningKey(decoded.header.kid, (err, key) => {
        if (err || !key)
          return reject(new UnauthorizedException('Unknown signing key'));

        jwt.verify(
          token,
          key.getPublicKey(),
          { algorithms: ['RS256'] },
          (vErr, payload) => {
            if (vErr || !payload)
              return reject(new UnauthorizedException('Token invalid'));
            resolve(payload as JwtUser);
          },
        );
      });
    });
  }
}
