// services/catalog-service/prisma.config.ts
import 'dotenv/config'; // Loads environment variables from .env
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  datasource: {
    url: env('DATABASE_URL'), // Reads the URL from your .env file
  },
});
