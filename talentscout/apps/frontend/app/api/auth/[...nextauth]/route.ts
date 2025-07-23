import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.email === 'demo@demo.com' && credentials.password === 'demo') {
          return { id: '1', email: credentials.email, role: 'athlete' };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
