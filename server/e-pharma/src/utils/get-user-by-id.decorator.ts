
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentUserById = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { email, userType, sub } = request.user
    return { email, userType, _id: sub};
  },
);