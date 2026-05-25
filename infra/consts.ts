import type { DatabaseConfig } from "./types";

export const DATABASE_CONFIG: DatabaseConfig = {
  host: process.env.POSTGRES_HOST ?? "localhost",
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  database: process.env.POSTGRES_DB as string,
  user: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PASSWORD as string,
  ssl: process.env.ENVIRONMENT === "local" ? false : true,
};

export const MIGRATIONS_CONFIG = {};
