import { NextResponse } from "next/server";
import healthCheck from "./status";

export async function GET() {
  const data = await healthCheck();
  return NextResponse.json(data);
}
