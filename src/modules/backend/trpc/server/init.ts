import superjson from "superjson";

import { cache } from "react";

import { initTRPC, TRPCError } from "@trpc/server";
import { getSession } from "@/modules/auth/auth";
import { db } from "@/modules/backend/db";

const createTRPCContext = cache(() => ({
  db,
}));

type Context = {
  db: typeof db;
};

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

const createTRPCRouter = t.router;
const createCallerFactory = t.createCallerFactory;
const baseProcedure = t.procedure;
const protectedProcedure = t.procedure.use(
  t.middleware(async ({ ctx, next }) => {
    const session = await getSession();

    if (!session)
      throw new TRPCError({
        code: "UNAUTHORIZED",
      });

    return next({
      ctx: {
        ...ctx,
        user: session.user,
      },
    });
  })
);

export {
  createTRPCContext,
  createTRPCRouter,
  createCallerFactory,
  baseProcedure,
  protectedProcedure,
};
