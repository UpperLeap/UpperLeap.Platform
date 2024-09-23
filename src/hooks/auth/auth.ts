"use server";

import { AuthResponse } from "@/types/globals";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/utils/ironSessionOptions";
import { BASE_URL } from "@/constants/api";
import { getSession } from "@/utils/auth";

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

// export async function refreshSession() {
//   const session = await getSession();

//   if (!session?.accessToken || !session?.refreshToken || !session?.exp) return;

//   const currentTimeInSeconds = Math.floor(Date.now() / 1000);

//   if (!(session.exp < currentTimeInSeconds)) return;

//   const response = await fetch(`${BASE_URL}/authentication/refresh`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${session.accessToken}`,
//     },
//     body: JSON.stringify({
//       refreshToken: session?.refreshToken,
//     }),
//   });

//   const data = await response.json();

//   if (response.ok) {
//     await setAuthenticationCookie(data);
//   } else {
//     await deleteAuthenticationCookies();
//   }
// }
