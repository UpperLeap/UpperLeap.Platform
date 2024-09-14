"use client";

import { deleteAuthenticationCookies } from "./auth";

export const useLogout = () => {
  const clearData = async () => {
    await deleteAuthenticationCookies();
  };

  return { clearData };
};
