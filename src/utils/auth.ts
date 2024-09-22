import { getIronSession } from "iron-session";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { SessionData, sessionOptions } from "./ironSessionOptions";

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session?.accessToken) return null;

  return jwtDecode(session?.accessToken);
}

export async function getIsLoggedIn() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session?.accessToken) return null;

  return session?.isLoggedIn;
}

export async function refreshSession(request: NextRequest) {
  const session = await getSession();
  if (!session) return;

  const ironSession = await getIronSession<SessionData>(
    cookies(),
    sessionOptions,
  );

  const refreshToken = ironSession.refreshToken;
  const accessToken = ironSession.accessToken;

  if (session?.exp) {
    const currentTime = Math.floor(Date.now() / 1000);
    if (!(session.exp < currentTime)) return;

    const response = await fetch(
      `${request.nextUrl.origin}/api/refresh-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          refreshToken: refreshToken || "",
        },
      },
    );
  }
}
