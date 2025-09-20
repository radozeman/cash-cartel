import { createTRPCRouter } from "@/modules/trpc/server/init";

const appRouter = createTRPCRouter({});

type AppRouter = typeof appRouter;

export { appRouter, type AppRouter };
