import type { HealthCheckResponse } from "app/api/v1/health/types";

const BASE_URL = "http://localhost:3000/api";

describe("API -> Health Check", () => {
  describe("GET /v1/health", () => {
    it("returns 200 on API call", async () => {
      const response = await fetch(`${BASE_URL}/v1/health`);
      expect(response.status).toBe(200);
    });
    it("returns success messages for Database and Application", async () => {
      const response = await fetch(`${BASE_URL}/v1/health`);
      const data = (await response.json()) as HealthCheckResponse;

      expect(data.webapp.server_message).toBe("Application running...");
      expect(data.database.db_message).toBe("Database connection ok...");
      expect(data.database.active_connections).toEqual(expect.any(Number));
      expect(data.database.max_connections).toEqual(expect.any(Number));
      expect(data.database.update_at).toBeTruthy();
      expect(new Date(data.database.update_at).toISOString()).toBe(data.database.update_at);
    });
    it("returns 404 when called wrong API version", async () => {
      let response = await fetch(`${BASE_URL}/health`);
      expect(response.status).toBe(404);
      response = await fetch(`${BASE_URL}/v0/health`);
      expect(response.status).toBe(404);
    });
  });
});
