import "server-only";

import { cache } from "react";

import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { makeQueryClient } from "@/modules/trpc/client/query-client";
import { appRouter } from "@/modules/trpc/server/routers/_app";
import { createTRPCContext } from "@/modules/trpc/server/init";

const getQueryClient = cache(makeQueryClient);

const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});

export { getQueryClient, trpc };
