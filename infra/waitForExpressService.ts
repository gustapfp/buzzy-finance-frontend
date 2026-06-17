const MAX_RETRIES = 100;
export async function waitForExpressService(retries = 0) {
  if (retries > MAX_RETRIES) {
    console.error("\n\n🔴 Express Service did not become ready after maximum retries.\n");
    process.exit(1);
  }
  try {
    const request = await fetch("http://localhost:8080/api/v1/status");
    if (!request.ok) {
      process.stdout.write(".");
      return await waitForExpressService(retries + 1);
    }
    console.log("\n\n🟢 Express Service is running\n");
  } catch {
    process.stdout.write(".");
    await setTimeout(async () => {
      await waitForExpressService(retries + 1);
    }, 1000);
  }
}
process.stdout.write("💭 Connecting to Express Service...");
waitForExpressService();
