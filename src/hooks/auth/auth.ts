"use server";

import { AuthResponse } from "@/types/globals";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/utils/ironSessionOptions";

export async function setAuthenticationCookie(data: AuthResponse) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  session.accessToken = data.accessToken;
  session.refreshToken = data.refreshToken;
  session.isLoggedIn = true;

  await session.save();
}

export async function getAuthenticationCookies() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  return {
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
  };
}

export async function deleteAuthenticationCookies() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  session.destroy();
}

