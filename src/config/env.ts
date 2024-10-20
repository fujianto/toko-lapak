import * as z from 'zod';
import 'dotenv/config';

const createEnv = () => {
    const EnvSchema = z.object({
        API_URL: z.string(),
        WOO_CONSUMER_KEY: z.string(),
        WOO_CONSUMER_SECRET: z.string(),
    });

    const envVars = {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        WOO_CONSUMER_KEY: process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY,
        WOO_CONSUMER_SECRET: process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET,
    };

    const parsedEnv = EnvSchema.safeParse(envVars);

    if (!parsedEnv.success) {
        throw new Error(
            `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
                .map(([k, v]) => `- ${k}: ${v}`)
                .join('\n')}
  `,
        );
    }

    return parsedEnv.data ?? {};
};

export const env = createEnv();