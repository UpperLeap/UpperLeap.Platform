import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { getSession } from "./utils/auth";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  const session = await getSession();
  const url = request.nextUrl;
  console.log("middleware triggered");
  

  if (session?.exp && Date.now() >= session?.exp * 1000) {
    console.log("session expired middleware");
    const refreshUrl = new URL("/api/refresh-session", request.url);
    refreshUrl.searchParams.set("redirectTo", url.pathname);
    console.log(refreshUrl.toString());

    return NextResponse.redirect(refreshUrl);
  }

  const response = intlMiddleware(request);

  response.headers.set("current-path", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
