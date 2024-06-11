import { env } from '@sotiesman/env';
import { type Config } from 'drizzle-kit';

export default {
	dialect: 'sqlite',
	driver: 'turso',
	schema: './src/schema/index.ts',
	dbCredentials: {
		url: env.DATABASE_URL,
		authToken: env.DATABASE_AUTH_TOKEN
	},
	out: './src/migrations'
} satisfies Config;
