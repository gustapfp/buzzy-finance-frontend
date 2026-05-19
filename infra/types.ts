export interface DatabaseStatusResponse {
  update_at: string;
  postgres_version: String;
  max_connections?: Number;
  active_connections?: Number;
  exit_code: Number;
  db_message: String;
}
