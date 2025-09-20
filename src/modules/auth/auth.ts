import { db } from "@/modules/backend/db";
import {
  account,
  session,
  user,
  verification,
} from "@/modules/backend/db/schemas/auth-schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  pages: {
    signIn: "/sign-in",
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  plugins: [nextCookies()],
});

const getSession = async () =>
  auth.api.getSession({
    headers: await headers(),
  });

export { getSession };
export default auth;
