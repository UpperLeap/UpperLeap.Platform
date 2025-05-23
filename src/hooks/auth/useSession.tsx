"use client";

import { useAuthStore } from "@/stores/auth";
import { GetSessionData } from "@/utils/auth";
import { useState, useEffect } from "react";

export function useSession() {
  const [session, setSession] = useState<GetSessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useAuthStore();

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
  }, [isLoggedIn]);

  return { ...session, isLoading };
}
