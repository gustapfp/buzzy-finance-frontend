import healthCheck from "./healthCheck";

export function GET() {
  return healthCheck();
}
