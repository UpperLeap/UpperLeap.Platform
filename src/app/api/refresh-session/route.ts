import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/constants/api";
import { AuthResponse } from "@/types/globals";
import {
  deleteAuthenticationCookies,
  setAuthenticationCookie,
} from "@/hooks/auth/auth";

export async function POST(req: NextRequest) {
  const refreshToken = req.headers.get("refreshToken");
  const authorizationHeader = req.headers.get("Authorization");

  if (!refreshToken || !authorizationHeader) {
    console.log("invalid session");

    return NextResponse.json({ error: "Invalid Session" }, { status: 401 });
  }

  const response = await fetch(`${BASE_URL}/authentication/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${authorizationHeader}`,
    },
    body: JSON.stringify({
      refreshToken: refreshToken,
    }),
  });

  if (!response.ok) {
    console.log("logout");

    await deleteAuthenticationCookies();

    return NextResponse.json(
      { error: "Failed to refresh session" },
      { status: 401 },
    );
  }

  const data: AuthResponse = await response.json();
  const res = NextResponse.json({ message: "Session refreshed" });

  console.log("Session refreshed");

  if (data) {
    await setAuthenticationCookie(data);
  }

  return res;
}
