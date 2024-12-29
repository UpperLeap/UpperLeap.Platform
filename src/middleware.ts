import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./utils/auth";

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  const session = await getSession();
  const url = request.nextUrl;

  if (!url.pathname.startsWith("/api/refresh-session")) {
    if (session?.exp && Date.now() >= session?.exp * 1000) {
      const refreshUrl = new URL("/api/refresh-session", request.url);
      refreshUrl.searchParams.set("redirectTo", url.pathname);

      return NextResponse.redirect(refreshUrl);
    }
  }

  const response = NextResponse.next();
  response.headers.set("current-path", url.pathname);
  response.headers.set("current-url", url.toString());

  return response;
}
