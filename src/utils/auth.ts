import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export function getSession() {
  const session = cookies().get("accessToken");

  if (!session) return null;

  return jwtDecode(session.value);
}

export async function refreshSession(request: NextRequest) {
  const session = getSession();
  if (!session) return;

  const refreshToken = cookies().get("refreshToken");
  const accessToken = cookies().get("accessToken");

  if (session?.exp || 0 < Date.now()) {
    const response = await fetch(
      `${request.nextUrl.origin}/api/refresh-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken?.value}`,
          refreshToken: refreshToken?.value || "",
        },
      },
    );
  }
}
