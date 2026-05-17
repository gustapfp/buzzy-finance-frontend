const BASE_URL = "http://localhost:3000/api";

describe("API -> Health Check", () => {
  describe("GET /v1/health", () => {
    it("returns 200 on API call", async () => {
      const response = await fetch(`${BASE_URL}/v1/health`);
      expect(response.status).toBe(200);
    });
    it("returns 404 when called wrong API version", async () => {
      let response = await fetch(`${BASE_URL}/helth`)
      expect(response.status).toBe(404)
      response = await fetch(`${BASE_URL}/v0/helth`)
      expect(response.status).toBe(404)

    })
  });
});
