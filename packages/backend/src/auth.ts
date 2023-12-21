import { PrismaClient } from '@prisma/client';
import { createTRPCRouter } from '@trpc/server';
import { TRPCResponse } from '@trpc/server';
import { createContext } from './utils/createContext';

const prisma = new PrismaClient();

export const router = createTRPCRouter({
  onError({ error }) {
    console.error(error);
    return {
      error: {
        message: error.message,
        code: error.name,
      },
    } as TRPCResponse;
  },
  createContext,
})
  .mutation('login', {
    input: z.object({
      username: z.string(),
      password: z.string(),
    }),
    resolve: async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: { username: input.username },
      });
      if (!user || !compareSync(input.password, user.password)) {
        throw new Error('Invalid username or password');
      }
      return user;
    },
  })
  .mutation('logout', {
    resolve: async ({ ctx }) => {
      ctx.session.destroy();
      return true;
    },
  });
