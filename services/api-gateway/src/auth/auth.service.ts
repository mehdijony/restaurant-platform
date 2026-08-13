import { Injectable, UnauthorizedException } from '@nestjs/common';

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
}

@Injectable()
export class AuthService {
  private get baseUrl(): string {
    const url = process.env.KEYCLOAK_URL ?? 'http://localhost:8080';
    const realm = process.env.KEYCLOAK_REALM ?? 'restaurant';
    return `${url}/realms/${realm}/protocol/openid-connect`;
  }

  private get clientId(): string {
    return process.env.KEYCLOAK_CLIENT_ID ?? 'api';
  }

  private get clientSecret(): string {
    return process.env.KEYCLOAK_CLIENT_SECRET ?? '';
  }

  async login(username: string, password: string): Promise<TokenResponse> {
    const body = new URLSearchParams({
      grant_type: 'password',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      username,
      password,
    });

    const response = await fetch(`${this.baseUrl}/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Keycloak login failed:', error);
      throw new UnauthorizedException('Invalid credentials');
    }

    return response.json() as Promise<TokenResponse>;
  }

  async refresh(refreshToken: string): Promise<TokenResponse> {
    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken,
    });

    const response = await fetch(`${this.baseUrl}/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Keycloak refresh failed:', error);
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    return response.json() as Promise<TokenResponse>;
  }

  async logout(refreshToken: string): Promise<void> {
    const body = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: refreshToken,
    });

    await fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
  }
}
