import healthCheck from "./health";

export function GET() {
  return healthCheck();
}
