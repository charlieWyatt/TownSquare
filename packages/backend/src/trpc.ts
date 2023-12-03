import { createTRPCRouter, TRPCResponse } from '@trpc/server';
import { createContext } from './utils/createContext';
import { auth } from './auth';

export const router = createTRPCRouter({
  createContext: createContext,
})
  .middleware(async (ctx, next) => {
    try {
      return await next();
    } catch (error) {
      console.error(error);
      return new TRPCResponse({
        status: error.status || 500,
        data: {
          error: error.message || 'An error occurred',
        },
      });
    }
  })
  .query('me', {
    resolve: async ({ ctx }) => {
      if (!ctx.session.userId) {
        return null;
      }
      const user = await ctx.prisma.user.findUnique({
        where: { id: ctx.session.userId },
      });
      return user;
    },
  })
  .mutation('login', {
    input: z.object({
      username: z.string(),
      password: z.string(),
    }),
    resolve: auth.login,
  })
  .mutation('logout', {
    resolve: auth.logout,
  });