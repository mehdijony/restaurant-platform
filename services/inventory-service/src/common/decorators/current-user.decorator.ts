// services/inventory-service/src/common/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtUser } from '../guards/jwt-auth.guard';

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): JwtUser => {
    if (ctx.getType<string>() === 'graphql')
      return GqlExecutionContext.create(ctx).getContext<{
        req: { user: JwtUser };
      }>().req.user;
    return ctx.switchToHttp().getRequest<{ user: JwtUser }>().user;
  },
);
