import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ParamId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const takeId = Number(ctx.switchToHttp().getRequest().params.id);
    return takeId;
  },
);
