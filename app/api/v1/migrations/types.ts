import { NextResponse } from "next/server";
import type { RunMigration } from "node-pg-migrate/migration";
import type { ErrorResponse } from "../types";

export type MigrationsResponse = Promise<NextResponse<RunMigration[] | ErrorResponse>>;
