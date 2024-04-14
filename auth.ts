import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { getUserFromDb, saltAndHashPassword } from './lib/utils';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const pwHash = saltAndHashPassword(credentials?.password);

        user = await getUserFromDb(credentials?.email, pwHash);

        if (!user) {
          throw new Error('User not found.');
        }

        return user;
      },
    }),
  ],
});
