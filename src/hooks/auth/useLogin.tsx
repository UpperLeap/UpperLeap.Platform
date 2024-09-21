"use client";

import { AxiosError } from "axios";
import { useTranslations } from "next-intl";
import React from "react";
import toast from "react-hot-toast";
import { useAction } from "../api/useAction";
import useModalStore from "@/stores/auth_modal";
import { axiosInstance } from "@/utils/axiosInstance";
import { TOKEN_TYPE } from "@/constants/api";
import { AuthResponse } from "@/types/globals";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";
import { setAuthenticationCookie } from "./auth";

const useLogin = (isOtp?: boolean) => {
  const t = useTranslations();
  const router = useRouter();
  const { setModalData, payload, closeModal } = useModalStore();
  const { setAuth } = useAuthStore();

  const onError = (error: AxiosError) => {
    setModalData({ errorStatus: error?.response?.status });
    if (error?.response?.status === 403) {
      setModalData({ currentTab: "otp" });
    } else {
      toast.error(error?.message || t("errors.default"));
    }
  };

  const onSuccess = async (data: AuthResponse) => {
    await setAuthenticationCookie(data);

    axiosInstance.defaults.headers.common["Authorization"] =
      `${TOKEN_TYPE} ${data?.accessToken}`;

    setAuth({ isLoggedIn: true });
    toast.success(t("auth.loginSuccess"));

    if (closeModal) closeModal();

    router.refresh();
  };

  const { mutate, ...action } = useAction({
    method: "POST",
    endpoint: "/authentication/login",
    mutationOptions: {
      onError,
      ...(isOtp && { onSuccess }),
    },
  });

  const handleFormSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    mutate(payload);
  };

  return { handleFormSubmit, ...action };
};

export default useLogin;
