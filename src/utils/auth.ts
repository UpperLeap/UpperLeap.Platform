import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function getSession() {
  const cookieStore = cookies();
  const session = cookieStore.get('accessToken');
  
  if (!session?.value) return null;
  console.log(session?.value)

  return jwtDecode(session?.value);
}

export async function refreshSession(request: NextRequest) {
  const session = getSession();
  if(!session) return;

  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken')
  const accessToken = cookieStore.get('accessToken')

  if(session?.exp || 0 < Date.now()) {
    const response = await fetch(`${request.nextUrl.origin}/api/refresh-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken?.value}`,
        refreshToken: refreshToken?.value || "",
      }
    })

    if(response.ok) {
      const data = await response.json();
      const res = NextResponse.next();

      res.cookies.set('accessToken', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
        path: "/"
      })
    
      res.cookies.set('refreshToken', data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
        path: "/"
      })
    
      return res;
    }
  }
}
