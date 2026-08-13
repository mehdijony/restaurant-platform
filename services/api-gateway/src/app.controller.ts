import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './auth/roles.guard';
import { Roles } from './auth/roles.decorator';
import { CurrentUser } from './auth/current-user.decorator';
import { AuthUser } from './auth/jwt.strategy';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return {
      status: 'ok',
      service: 'api-gateway',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('protected')
  @UseGuards(JwtAuthGuard)
  protected(@CurrentUser() user: AuthUser) {
    return {
      message: 'you are authenticated',
      user,
    };
  }

  @Get('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SUPER_ADMIN')
  admin(@CurrentUser() user: AuthUser) {
    return {
      message: 'you are a super admin',
      user,
    };
  }
}
