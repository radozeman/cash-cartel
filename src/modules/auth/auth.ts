import { db } from "@/modules/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import {
  account,
  session,
  user,
  verification,
} from "@/modules/db/schema/auth-schema";

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
  secret: process.env.AUTH_SECRET!,
  plugins: [nextCookies()],
});

export default auth;
