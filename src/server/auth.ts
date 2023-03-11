import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "@/env.mjs";
import { prisma } from "@/server/db";
import { loginSchema } from "@/pages/auth/login";
import bcrypt from "bcryptjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, token, user }) {
      console.log('User', user)
      console.log('Token', token)
      if (user) {
        session.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
        // session.accessToken = token.accessToken;
      }
      return session;
    },
    jwt: ({ token, user }) => {
      if (user) {
        console.log("token", user);
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "ecomap",
      name: "ecomap-login",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsedCredentials = await loginSchema.parseAsync(credentials);

        try {
          const user = await prisma.user.findFirst({
            where: { email: parsedCredentials.email },
          });

          if (!user) {
            return Promise.reject(new Error("User does not exist"));
          }

          const isPasswordValid = await bcrypt.compare(
            parsedCredentials.password,
            user.password
          );

          if (!isPasswordValid) {
            return Promise.reject(new Error("Wrong password"));
          }

          if (user && isPasswordValid) {
            return Promise.resolve(user);
          }
        } catch (error) {
          throw new Error("Unkown Error");
        }
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
