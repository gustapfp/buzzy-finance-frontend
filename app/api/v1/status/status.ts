import type { HealthCheckResponse, ServerHealthResponse } from "./types";
import { SERVICE_URL } from "../../consts";

const healthCheck = async (): Promise<HealthCheckResponse> => {
  try {
    const response = await fetch(`${SERVICE_URL}/v1/status`);
    const serverResponse = (await response.json()) as ServerHealthResponse;
    return {
      webapp: { server_message: "I'm good and running!:)" },
      express_server: serverResponse,
    };
  } catch (error) {
    console.error("Error checking health:", error);
    return {
      webapp: { server_message: "Error checking health" },
      express_server: {
        api: { server_message: "Error checking health" },
        database: {
          update_at: "",
          postgres_version: "",
          exit_code: -1,
          db_message: "Error checking server health endpoint",
        },
        status_message: "Error checking server health endpoint",
      },
    };
  }
};
export default healthCheck;
