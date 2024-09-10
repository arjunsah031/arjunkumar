import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // Check if user exists and password is correct
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, name: user.username, email: user.email };
        }

        // If login fails, return null
        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt", // You can still use JWT-based sessions by default
  },

  secret: process.env.JWT_SECRET, // Ensure you have a secret for JWT
 
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
