import { Type as T } from "@sinclair/typebox";
import { StaticDecode } from "@sinclair/typebox";
import dotenv from "dotenv";
dotenv.config();

/**
 * Define sensitive environment variables here.
 *
 * These are fed into the worker/workflow as `env` and are
 * taken from either `dev.vars` or repository secrets.
 * They are used with `process.env` but are type-safe.
 */
export const envSchema = T.Object({
  OPENAI_API_KEY: T.String(),
  UBIQUITY_OS_APP_NAME: T.String({ default: "UbiquityOS" }),
  VOYAGEAI_API_KEY: T.String(),
  SUPABASE_URL: T.String(),
  SUPABASE_KEY: T.String(),
  OPENROUTER_API_KEY: T.String(),
  KERNEL_PUBLIC_KEY: T.Optional(T.String()),
  LOG_LEVEL: T.Optional(T.String()),
  GOOGLE_SERVICE_ACCOUNT_KEY: T.String(),
});

export type Env = StaticDecode<typeof envSchema>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      OPENAI_API_KEY: string;
      UBIQUITY_OS_APP_NAME: string;
      VOYAGEAI_API_KEY: string;
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
      OPENROUTER_API_KEY: string;
      KERNEL_PUBLIC_KEY?: string;
      LOG_LEVEL?: string;
      GOOGLE_SERVICE_ACCOUNT_KEY: string;
    }
  }
}
