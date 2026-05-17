const BASE_URL = "http://localhost:3000/api";

describe("API -> Health Check", () => {
  describe("GET /v1/health", () => {
    it("returns 200", async () => {
      const response = await fetch(`${BASE_URL}/v1/health`);
      expect(response.status).toBe(200);
    });
  });
});
