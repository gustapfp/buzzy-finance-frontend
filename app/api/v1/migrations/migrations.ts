import { MIGRATIONS_CONFIG } from "infra/consts";
import { runner, type RunnerOption } from "node-pg-migrate";
import type { RunMigration } from "node-pg-migrate/migration";
import { DB_POOL } from "infra/database";

export const runDryMigrations: () => Promise<RunMigration[]> = async () => {
  try {
    return await runner({
      ...(MIGRATIONS_CONFIG as RunnerOption),
      dryRun: true,
      verbose: true,
    });
  } catch (e) {
    console.error(`Error running DRY migrations: ${e}`);
    throw e;
  }
};

export const runLiveRunMigrations: () => Promise<RunMigration[]> = async () => {
  const client = await DB_POOL.connect();

  try {
    await client.query("BEGIN");
    const appliedMigrations = await runner({
      ...(MIGRATIONS_CONFIG as RunnerOption),
    });
    await client.query("COMMIT");
    return appliedMigrations;
  } catch (e) {
    console.error(`Error running LIVE migrations: ${e}`);
    await client.query("ROOLBACK");
    throw e;
  } finally {
    client.release();
  }
};
