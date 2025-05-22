import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define and EXPORT your authOptions here
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here if needed
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        // Add the user ID (from token.sub) to the session object
        // Make sure your session user type can accommodate 'id'
        (
          session.user as {
            id?: string | undefined;
            name?: string | null | undefined;
            email?: string | null | undefined;
            image?: string | null | undefined;
          }
        ).id = token.sub;
      }
      return session;
    },
    // You might add other callbacks like jwt if needed for custom token handling
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Add other NextAuth configurations here if necessary
  // e.g., pages: { signIn: '/auth/signin' }
};
