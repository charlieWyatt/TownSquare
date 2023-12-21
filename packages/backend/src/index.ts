import { createTRPCServer } from '@trpc/server';
import { createContext } from './utils/createContext';
import { authRouter } from './auth';
import { prismaRouter } from './prisma';

const server = createTRPCServer({
  router: authRouter.merge('prisma/', prismaRouter),
  createContext,
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});