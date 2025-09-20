import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL!,
});

const { getSession: getSessionClient } = authClient;

export { authClient, getSessionClient };
