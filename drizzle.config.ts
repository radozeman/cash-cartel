import { neonConfig } from "@neondatabase/serverless";
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

neonConfig.fetchConnectionCache = true;

config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/modules/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
