import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import { getUserFromDb, saltAndHashPassword } from './lib/utils';

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password', type: 'password' },
      },
      authorize: async (credentials) => {
        let user = null;

        const pwHash = await saltAndHashPassword(
          credentials?.password as string,
        );

        user = await getUserFromDb(credentials?.email as string, pwHash);

        if (!user) {
          throw new Error('User not found.');
        }

        return user;
      },
    }),
  ],
});
