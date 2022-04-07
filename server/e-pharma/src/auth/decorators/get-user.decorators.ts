import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserFromJWT = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    console.log('GetUserFromJWT', request);
    
    const { authorization } = request
    
    return request.user;
  },
);