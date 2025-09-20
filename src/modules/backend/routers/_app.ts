import { createTRPCRouter } from "@/modules/backend/trpc/server/init";

const appRouter = createTRPCRouter({});

type AppRouter = typeof appRouter;

export { appRouter, type AppRouter };
