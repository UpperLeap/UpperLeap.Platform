"use client";
import { deleteAuthenticationCookies } from "@/app/actions/auth";
import { clearCookiesClient } from "@/services/cookies/cookiesClient";
import { useAuthStore } from "@/stores/auth";

// import { useMutation } from "@tanstack/react-query";

// import { requestHandler } from "./api/utils";

export const useLogout = () => {

  const clearData = async () => {
    console.log("asdawdadwd")
    await deleteAuthenticationCookies();
  };

  // const { mutate: logout, ...action } = useMutation({
  //   mutationFn: () => requestHandler({ method: "DELETE", endpoint: "" }),
  //   onSettled: clearData,
  // });

  // return { clearData, ...action };
  return { clearData };
};
