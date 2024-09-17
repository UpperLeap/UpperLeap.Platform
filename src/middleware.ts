import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { refreshSession } from "./utils/auth";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  await refreshSession(request);

  const response = intlMiddleware(request);

  response.headers.set("current-path", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
