import { type Config } from "drizzle-kit"
import { env } from "~/env.mjs"

export default {
  schema: "./src/server/db/schema.ts",
  driver: "turso",
  out: "./src/server/db/migrations",
  breakpoints: true,
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config
