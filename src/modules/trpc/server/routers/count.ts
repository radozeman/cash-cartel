import { uuid } from "@/lib/uuid";
import { count } from "@/modules/db/schema";
import {
  createTRPCRouter,
  protectedProcedure,
} from "@/modules/trpc/server/init";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";

const countRouter = createTRPCRouter({
  getCount: protectedProcedure.query(async ({ ctx }) => {
    const existingCount = await ctx.db.query.count.findFirst({
      where: eq(count.userId, ctx.user.id),
    });

    if (!existingCount)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "No count exists.",
      });

    return existingCount;
  }),

  createCount: protectedProcedure.mutation(async ({ ctx }) => {
    const existingCount = await ctx.db.query.count.findFirst({
      where: eq(count.userId, ctx.user.id),
    });

    if (existingCount)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Count already exists for current user.",
      });

    await ctx.db.insert(count).values({
      id: uuid(),
      count: 1,
      userId: ctx.user.id,
    });
  }),

  deleteCount: protectedProcedure.mutation(async ({ ctx }) => {
    const existingCount = await ctx.db.query.count.findFirst({
      where: eq(count.userId, ctx.user.id),
    });

    if (!existingCount)
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "No count exists for current user - nothing to delete.",
      });

    await ctx.db.delete(count).where(eq(count.userId, ctx.user.id));
  }),
});

export { countRouter };
