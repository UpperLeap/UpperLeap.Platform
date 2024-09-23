"use client";

import { useState, useEffect } from "react";

export function useSession() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSessionStatus() {
      try {
        const response = await fetch("/api/session");
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSessionStatus();
  }, []);

  return { isLoggedIn, isLoading };
}
