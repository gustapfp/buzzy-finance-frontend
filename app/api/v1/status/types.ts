interface ServerMessage {
  server_message: String;
}

export interface HealthCheckResponse {
  webapp: ServerMessage;
  express_server: ServerHealthResponse;
}

interface DatabaseStatusResponse {
  update_at: string;
  postgres_version: string;
  max_connections?: number;
  active_connections?: number;
  exit_code: number;
  db_message: string;
}

export interface ServerHealthResponse {
  api: ServerMessage;
  database: DatabaseStatusResponse;
  status_message: string;
}
