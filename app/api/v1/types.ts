export interface ErrorResponse {
  error_message: string; // Error message from the trowed
  status_code: number;
  user_error_message?: string; // Readable user error message
}
