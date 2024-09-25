import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/constants/api";
import { AuthResponse } from "@/types/globals";
import {
  deleteAuthenticationCookies,
  setAuthenticationCookie,
} from "@/hooks/auth/auth";
import { getSession } from "@/utils/auth";

export async function GET(request: NextRequest) {
  const session = await getSession();
  const refreshToken = session?.refreshToken;
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get("redirectTo") || "/";
  const redirectUrl = new URL(redirectTo, request.url);

  if (!refreshToken) {
    console.log("invalid session");
    await deleteAuthenticationCookies();

    return NextResponse.json({ error: "Invalid Session" }, { status: 401 });
  }

  const response = await fetch(`${BASE_URL}/authentication/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  // const res = NextResponse.json({ message: "Session refreshed" });

  console.log("Session refreshed");

  if (data) {
    await setAuthenticationCookie(data);
  }

  return NextResponse.redirect(redirectUrl.toString());
}
