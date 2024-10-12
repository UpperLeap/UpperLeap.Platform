"use client";

import { JwtPayload } from "jwt-decode";
import { useState, useEffect } from "react";

export function useSession() {
  const [session, setSession] = useState<JwtPayload | null>(null);
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
