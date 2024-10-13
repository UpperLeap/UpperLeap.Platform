import { getIronSession } from "iron-session";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "./ironSessionOptions";

export type GetSessionData = {
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  nameid?: string;
  email?: string;
  role?: string | string[];
  accessToken?: string;
  refreshToken?: string;
  isLoggedIn?: boolean;
};

export async function getSession(): Promise<GetSessionData | null> {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session?.accessToken) return null;

  return {
    ...jwtDecode(session?.accessToken),
    accessToken: session?.accessToken,
    refreshToken: session?.refreshToken,
    isLoggedIn: session?.isLoggedIn,
  };
}

export async function getIsLoggedIn() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session?.accessToken) return null;

  return session?.isLoggedIn;
}
