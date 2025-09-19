import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
});

const { signIn, signUp, useSession } = createAuthClient();

export { authClient, signIn, signUp, useSession };
