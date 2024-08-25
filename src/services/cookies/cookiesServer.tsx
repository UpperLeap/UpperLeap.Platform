"use server";
import { CookieListItem } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

function createCookieServer(cookieListItem: CookieListItem) {
  cookies().set(cookieListItem);
}

function getCookieServer(name: string) {
  return cookies().get(name);
}

function hasCookieServer(name: string) {
  return cookies().has(name);
}

function deleteCookieServer(name: string) {
  cookies().delete(name);
}

function clearCookiesServer() {
  cookies()
    .getAll()
    .forEach((cookie) => cookies().delete(cookie.name));
}

export {
  createCookieServer,
  getCookieServer,
  hasCookieServer,
  deleteCookieServer,
  clearCookiesServer,
};
