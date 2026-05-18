import { Client, Pool } from "pg";
import type { DatabaseStatusResponse } from "./types";

const databaseConfig = {
  host: process.env.POSTGRES_HOST ?? "localhost",
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};

export const createClient = (): Client => {
  const client = new Client(databaseConfig);
  return client;
};

const DB_POOL: Pool = new Pool({
  ...databaseConfig,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  maxLifetimeSeconds: 60,
});

export const databaseStatus = async (): Promise<DatabaseStatusResponse> => {
  const statement = "SELECT $1::text as message";
  const updateAt = new Date().toISOString();

  try {
    const res = await DB_POOL.query(statement, ["Database connection ok..."]);

    return {
      update_at: updateAt,
      postgres_version: "V16.0",
      max_connections: DB_POOL.totalCount,
      active_connections: DB_POOL.totalCount - DB_POOL.idleCount,
      exit_code: 0,
      db_message: res.rows[0].message,
    };
  } catch (err) {
    return {
      update_at: updateAt,
      postgres_version: "V16.0",
      exit_code: 1,
      db_message: String(err),
    };
  }
};
