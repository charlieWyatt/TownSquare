import { PrismaClient } from '@prisma/client';
import { session } from '../auth';

export function createContext() {
  return {
    prisma: new PrismaClient(),
    session,
  };
}