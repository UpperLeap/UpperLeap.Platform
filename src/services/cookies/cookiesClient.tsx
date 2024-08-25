import type { CookieList } from "./types";

function createCookieClient(cookieListItem: CookieList) {
  let cookie = `${cookieListItem.name}=${cookieListItem.value};`;

  if (cookieListItem.maxAge) cookie += `max-age=${cookieListItem.maxAge};`;
  if (cookieListItem.path) cookie += `path=${cookieListItem.path};`;
  if (cookieListItem.secure) cookie += `secure;`;
  if (cookieListItem.httpOnly) cookie += `httpOnly;`;

  document.cookie = cookie;
}

function getCookieClient(name: string) {
  if (typeof document === "undefined") return;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");

    if (cookie[0].trim() === name) {
      return { name: cookie[0].trim(), value: cookie[1].trim() };
    }
  }
}

function hasCookieClient(name: string) {
  if (typeof document === "undefined") return;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");

    if (cookie[0].trim() === name) {
      return true;
    }
  }

  return false;
}

function deleteCookieClient(name: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function clearCookiesClient() {
  if (typeof document === "undefined") return;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");

    document.cookie = `${cookie[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

export {
  createCookieClient,
  getCookieClient,
  hasCookieClient,
  deleteCookieClient,
  clearCookiesClient,
};
