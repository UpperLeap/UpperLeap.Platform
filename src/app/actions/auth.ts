"use server";

import { AuthResponse } from "@/types/globals";
import { cookies } from "next/headers";

export async function setAuthenticationCookie(data: AuthResponse) {
  const cookieStore = cookies();

  cookieStore.set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
    path: "/",
  });

  cookieStore.set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
    path: "/",
  });
}

export async function getAuthenticationCookies() {
  const cookieStore = cookies();

  return {
    accessToken: cookieStore.get('accessToken'),
    refreshToken: cookieStore.get('refreshToken')
  }
}

export async function deleteAuthenticationCookies() {
  const cookieStore = cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}