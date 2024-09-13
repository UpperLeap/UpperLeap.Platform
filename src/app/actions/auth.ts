"use server";

import { AuthResponse } from "@/types/globals";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import {
  defaultSession,
  SessionData,
  sessionOptions,
} from "@/utils/ironSessionOptions";

export async function setAuthenticationCookie(data: AuthResponse) {
  const cookieStore = cookies();
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  session.accessToken = data.accessToken;
  session.refreshToken = data.refreshToken;
  session.isLoggedIn = true;

  await session.save();

  // cookieStore.set("accessToken", data.accessToken, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: "strict",
  //   maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
  //   path: "/",
  // });

  // cookieStore.set("refreshToken", data.refreshToken, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: "strict",
  //   maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
  //   path: "/",
  // });
}

export async function getAuthenticationCookies() {
  const cookieStore = cookies();

  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  console.log(session.refreshToken);
  console.log(session.accessToken);

  return {
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
  };
}

export async function deleteAuthenticationCookies() {
  const cookieStore = cookies();
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  // session.destroy();

  // cookieStore.delete("accessToken");
  // cookieStore.delete("refreshToken");
}
