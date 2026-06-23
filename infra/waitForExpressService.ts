import * as dotenv from "dotenv";
dotenv.config({ path: ".env.development" });

const MAX_RETRIES = 100;

export async function waitForExpressService(retries = 0) {
  if (retries > MAX_RETRIES) {
    console.error("\n\n🔴 Express Service did not become ready after maximum retries.\n");
    process.exit(1);
  }

  try {
    console.log("URL:", process.env.SERVICE_URL);
    const request = await fetch(`${process.env.SERVICE_URL}/api/v1/status`);
    if (!request.ok) {
      process.stdout.write(".");
      return await waitForExpressService(retries + 1);
    }
    console.log("\n\n🟢 Express Service is running\n");
  } catch {
    process.stdout.write(".");
    await setTimeout(async () => {
      await waitForExpressService(retries + 1);
    }, 5000);
  }
}
process.stdout.write("💭 Connecting to Express Service...");
waitForExpressService();
