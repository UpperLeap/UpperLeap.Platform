"use client";
import { deleteAuthenticationCookies } from "@/app/actions/auth";

export const useLogout = () => {
  const clearData = async () => {
    await deleteAuthenticationCookies();
  };

  return { clearData };
};
