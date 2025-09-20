import { appRouter } from "@/modules/backend/routers/_app";
import { createTRPCContext } from "@/modules/backend/trpc/server/init";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    createContext: createTRPCContext,
    endpoint: "/api/trpc",
    req,
    router: appRouter,
  });

export { handler as GET, handler as POST };
