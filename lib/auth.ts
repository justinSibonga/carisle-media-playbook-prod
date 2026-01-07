import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Allowed email domains
const ALLOWED_DOMAINS = ["hireable.ph", "carislemedia.com"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
  },
  callbacks: {
    async signIn({ user }) {
      // Check if user email is from an allowed domain
      if (!user.email) {
        return false;
      }
      
      const emailDomain = user.email.split("@")[1]?.toLowerCase();
      if (!emailDomain || !ALLOWED_DOMAINS.includes(emailDomain)) {
        return "/login?error=AccessDenied";
      }
      
      return true;
    },
    async session({ session, token }) {
      // Pass user info to client
      if (session.user && token.email) {
        session.user.email = token.email;
      }
      return session;
    },
  },
});
