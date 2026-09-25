import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

const rawUrl = env.DATABASE_URL;
if (!rawUrl) throw new Error('DATABASE_URL is not set');
const databaseUrl = rawUrl.startsWith('turso://')
	? rawUrl.replace('turso://', 'libsql://')
	: rawUrl;
const databaseAuthToken = env.DATABASE_AUTH_TOKEN;
if (!databaseAuthToken) throw new Error('DATABASE_AUTH_TOKEN is not set');

const client = createClient({ url: databaseUrl, authToken: databaseAuthToken });

export const db = drizzle(client, { schema });
