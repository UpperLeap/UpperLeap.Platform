"use client";
import { clearCookiesClient } from "@/services/cookies/cookiesClient";
import { useAuthStore } from "@/stores/auth";

// import { useMutation } from "@tanstack/react-query";

// import { requestHandler } from "./api/utils";

export const useLogout = () => {
  const { removeAuth } = useAuthStore();

  const clearData = () => {
    clearCookiesClient();
    removeAuth();
  };

  // const { mutate: logout, ...action } = useMutation({
  //   mutationFn: () => requestHandler({ method: "DELETE", endpoint: "" }),
  //   onSettled: clearData,
  // });

  // return { clearData, ...action };
  return { clearData };
};
