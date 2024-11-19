import { z } from "zod";

const envSchema = z.object({
  MODE: z.enum(["production", "development", "test"]).default("production"),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.coerce.boolean().default(false),
});

export const env = envSchema.parse(import.meta.env);
