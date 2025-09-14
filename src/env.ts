import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NEXT_PUBLIC_SWAPI_URL: z.url()
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SWAPI_URL: process.env.NEXT_PUBLIC_SWAPI_URL,
  },
});