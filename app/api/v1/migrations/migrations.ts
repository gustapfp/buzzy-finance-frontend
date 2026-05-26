import { MIGRATIONS_CONFIG } from "infra/consts";
import { runner, type RunnerOption } from "node-pg-migrate";
import type { RunMigration } from "node-pg-migrate/migration";

export const runDryMigrations: () => Promise<RunMigration[]> = async () => {
  return await runner({
    ...(MIGRATIONS_CONFIG as RunnerOption),
    dryRun: true,
    verbose: true,
  });
};

export const runLiveRunMigrations: () => Promise<RunMigration[]> = async () => {
  return await runner({
    ...(MIGRATIONS_CONFIG as RunnerOption),
  });
};
