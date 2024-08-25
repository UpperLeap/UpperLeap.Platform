interface CookieList {
  name: string;
  value: string;
  maxAge?: number;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
}

export type { CookieList };
