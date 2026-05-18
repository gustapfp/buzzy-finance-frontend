import { Client } from "pg";

export const databaseHealthCheck = async () => {
  const client = new Client({
    host: process.env.POSTGRES_HOST ?? "localhost",
    port: Number(process.env.POSTGRES_PORT ?? 5432),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();
  const statement = "SELECT $1::text as message";

  try {
    const res = await client.query(statement, ["Database connection ok..."]);
    return {
      exit_code: 0,
      db_response: res.rows[0].message,
    };
  } catch (err) {
    return {
      exit_code: 1,
      db_response: String(err),
    };
  } finally {
    await client.end();
  }
};
