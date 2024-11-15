"use client";

import { useRouter } from "next/navigation";
import { deleteAuthenticationCookies } from "./auth";
import { useAuthStore } from "@/stores/auth";

export const useLogout = () => {
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const clearData = async () => {
    await deleteAuthenticationCookies();
    setAuth({ isLoggedIn: false });

    router.refresh();
  };

  return { clearData };
};
