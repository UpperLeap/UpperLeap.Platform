import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/constants/api";
import { AuthResponse } from "@/types/globals";
import { cookies } from "next/headers";
import { deleteAuthenticationCookies } from "@/app/actions/auth";
import { SessionData, sessionOptions } from "@/utils/ironSessionOptions";
import { getIronSession } from "iron-session";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const refreshToken = req.headers.get("refreshToken");
  const authorizationHeader = req.headers.get("Authorization");

  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  console.log({
    headerData: authorizationHeader,
    auth: session.accessToken,
    bt: refreshToken,
  });

  if (!session.refreshToken || !session.accessToken) {
    console.log("invalid session");

    return NextResponse.json({ error: "Invalid Session" }, { status: 401 });
  }

  const response = await fetch(`${BASE_URL}/authentication/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.accessToken}`,
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

  res.cookies.set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
    path: "/",
  });

  res.cookies.set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
    path: "/",
  });

  return res;
}
