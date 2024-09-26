import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./utils/auth";

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  const session = await getSession();
  const url = request.nextUrl;

  // Add this check to prevent redirecting if we're already on the refresh-session route
  if (!url.pathname.startsWith('/api/refresh-session')) {
    if (session?.exp && Date.now() >= session?.exp * 1000) {
      const refreshUrl = new URL("/api/refresh-session", request.url);
      refreshUrl.searchParams.set("redirectTo", url.pathname);

      return NextResponse.redirect(refreshUrl);
    }
  }

  const response = NextResponse.next();

  response.headers.set("current-path", request.nextUrl.pathname);

  return response;
}
