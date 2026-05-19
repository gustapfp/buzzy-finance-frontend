import type { DatabaseStatusResponse } from "infra/types";

interface WebAppStatusResponse {
  server_message: String;
}
export interface HealthCheckResponse {
  webapp: WebAppStatusResponse;
  database: DatabaseStatusResponse;
  status: Number;
  status_message: string;
}
