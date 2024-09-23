import { getIsLoggedIn } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const isLoggedIn = await getIsLoggedIn();
  return NextResponse.json({ isLoggedIn });
}
