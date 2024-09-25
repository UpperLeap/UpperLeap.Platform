import { getIsLoggedIn, getSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getSession();
  const isLoggedIn = await getIsLoggedIn();

  return NextResponse.json({ ...session, isLoggedIn });
}
