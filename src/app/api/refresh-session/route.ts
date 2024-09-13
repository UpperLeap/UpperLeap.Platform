import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/constants/api";
import { AuthResponse } from "@/types/globals";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!refreshToken || !accessToken) {
    console.log("invalid session");

    return NextResponse.json({ error: "Invalid Session" }, { status: 401 });
  }

  const response = await fetch(`${BASE_URL}/authentication/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      refreshToken: refreshToken,
    }),
  });

  if(!response.ok) {
    console.log("should logout")

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return NextResponse.json({ error: "Failed to refresh session" }, { status: 401 });
  }

  const data: AuthResponse = await response.json()
  const res = NextResponse.json({ message: "Session refreshed" })

  res.cookies.set('accessToken', data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
    path: "/"
  })

  res.cookies.set('refreshToken', data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
    path: "/"
  })

  return res;
}
