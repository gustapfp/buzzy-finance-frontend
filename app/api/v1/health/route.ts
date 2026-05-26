import healthCheck from "./health";

export async function GET() {
  return healthCheck();
}
