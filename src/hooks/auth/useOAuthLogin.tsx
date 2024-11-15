"use client";

import { AuthResponse } from "@/types/globals";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { setAuthenticationCookie } from "./auth";
import { axiosInstance } from "@/utils/axiosInstance";
import { TOKEN_TYPE } from "@/constants/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAction } from "../api/useAction";
import { useAuthStore } from "@/stores/auth";

export type OauthPlatform = "google" | "discord" | "twitch";

const useOAuthLogin = (platform: OauthPlatform) => {
  const t = useTranslations();
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const onSuccess = async (data: AuthResponse) => {
    await setAuthenticationCookie(data);

    axiosInstance.defaults.headers.common["Authorization"] =
      `${TOKEN_TYPE} ${data?.accessToken}`;

    setAuth({ isLoggedIn: true });
    toast.success(t("auth.loginSuccess"));

    router.refresh();
  };

  const { mutate, ...action } = useAction({
    method: "POST",
    endpoint: "/authentication/authenticate",
    mutationOptions: {
      onSuccess,
      onSettled: () => {
        router.push("/");
      },
      retry: 0,
    },
  });

  return { mutate, ...action };
};

export default useOAuthLogin;
