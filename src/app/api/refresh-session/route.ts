import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/constants/api";
import { AuthResponse } from "@/types/globals";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  // const refreshToken = cookies().get("refreshToken");
  // const accessToken = cookies().get("accessToken");
  const refreshToken = req.headers.get("refreshToken");
  const authorizationHeader = req.headers.get("Authorization");

  // console.log(
  //   refreshToken,
  //   accessToken,
  // );

  if (!refreshToken || !authorizationHeader) {
    console.log("No valid session found");

    return NextResponse.json(
      { error: "No valid session found" },
      { status: 401 },
    );
  }

  const response = await fetch(`${BASE_URL}/authentication/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationHeader,
    },
    body: JSON.stringify({
      refreshToken: refreshToken,
    }),
  });

  if (!response.ok) {
    console.log("logout");

    cookies().delete("accessToken");
    cookies().delete("refreshToken");

    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 401 },
    );
  }

  const data: AuthResponse = await response.json();

  cookies().set("accessToken", data.accessToken, {
    maxAge: Date.parse(data.expiry),
    secure: true,
    path: "/",
    expires: new Date(Date.parse(data.expiry)),
  });
  cookies().set("refreshToken", data.refreshToken, {
    maxAge: Date.parse(data.expiry),
    secure: true,
    path: "/",
    expires: new Date(Date.parse(data.expiry)),
  });

  return NextResponse.json({ message: "Session refreshed" });
}
