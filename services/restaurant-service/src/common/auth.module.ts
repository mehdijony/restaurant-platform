import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

// ─────────────────────────────────────────────────────────
// AuthModule wires Keycloak JWT validation via PassportJS
// Import this module in any feature module that needs auth
// Guards are applied globally via AppModule APP_GUARD tokens
// ─────────────────────────────────────────────────────────

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [JwtStrategy],
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
