import healthCheck from "app/api/v1/status/status";
import type { ServerHealthResponse } from "app/api/v1/status/types";

global.fetch = jest.fn();

const mockServerHealthResponseHappyPath: ServerHealthResponse = {
  api: { server_message: "I'm good and running!:)" },
  database: {
    update_at: "2022-01-01T00:00:00.000Z",
    postgres_version: "14.2",
    exit_code: 0,
    db_message: "I'm good and running!:)",
  },
  status_message: "I'm good and running!:)",
};

const mockServerHealthResponseUnHappyPath: ServerHealthResponse = {
  api: { server_message: "Error checking health" },
  database: {
    update_at: "",
    postgres_version: "",
    exit_code: -1,
    db_message: "Error checking server health endpoint",
  },
  status_message: "Error checking server health endpoint",
};

describe("Checking Status Response from Server", () => {
  it("Happy Path: Testing if it returns the correct status message when the server is running", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: async () => mockServerHealthResponseHappyPath,
    });

    const data = await healthCheck();

    expect(data.express_server.status_message).toBe("I'm good and running!:)");
    expect(data.express_server.api.server_message).toBe("I'm good and running!:)");
    expect(data.express_server.database.db_message).toBe("I'm good and running!:)");
  });

  it("Sad Path: Testing if it returns the correct status message when the server is not running", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: async () => mockServerHealthResponseUnHappyPath,
    });

    const data = await healthCheck();

    expect(data.express_server.status_message).toBe("Error checking server health endpoint");
    expect(data.express_server.api.server_message).toBe("Error checking health");
    expect(data.express_server.database.db_message).toBe("Error checking server health endpoint");
  });
});
