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

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
