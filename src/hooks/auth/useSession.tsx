"use client";

import { useState, useEffect } from "react";

type GetSessionData = {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
};

export function useSession() {
  const [session, setSession] = useState<GetSessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSessionStatus() {
      try {
        const response = await fetch("/api/session");
        const data = await response.json();
        setSession(data);
      } catch (error) {
        setSession(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSessionStatus();
  }, []);

  return { ...session, isLoading };
}
