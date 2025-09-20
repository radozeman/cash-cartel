import "server-only";

import { cache } from "react";

import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { makeQueryClient } from "@/modules/backend/trpc/client/query-client";
import { createTRPCContext } from "@/modules/backend/trpc/server/init";
import { appRouter } from "@/modules/backend/routers/_app";

const getQueryClient = cache(makeQueryClient);

const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});

export { getQueryClient, trpc };
