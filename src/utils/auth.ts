import { getIronSession } from "iron-session";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "./ironSessionOptions";

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session?.accessToken) return null;

  return {
    ...jwtDecode(session?.accessToken),
    accessToken: session?.accessToken,
    refreshToken: session?.refreshToken,
  };
}

export async function getIsLoggedIn() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session?.accessToken) return null;

  return session?.isLoggedIn;
}

