import { user } from "@/modules/db/schemas/auth-schema";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

const count = pgTable("count", {
  id: text("id").primaryKey(),
  count: integer("count").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export { count };
