import { AxiosError } from "axios";
import { useTranslations } from "next-intl";
import React from "react";
import toast from "react-hot-toast";
import { useAction } from "../api/useAction";
import useModalStore from "@/stores/auth_modal";
import { createCookieClient } from "@/services/cookies/cookiesClient";
import { axiosInstance } from "@/utils/axiosInstance";
import { TOKEN_TYPE } from "@/constants/api";
import { AuthResponse } from "@/types/globals";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";

const useLogin = (isOtp?: boolean) => {
  const t = useTranslations();
  const router = useRouter();
  const { setModalData, payload, closeModal } = useModalStore();
  const { setAuth } = useAuthStore();

  const onError = (error: AxiosError) => {
    if (error?.response?.status === 403 && !isOtp) {
      setModalData({ currentTab: "otp" });
    } else {
      toast.error(error?.message || t("errors.default"));
    }
  };

  const onSuccess = (data: AuthResponse) => {
    createCookieClient({
      name: "accessToken",
      value: data?.accessToken,
      maxAge: Date.parse(data.expiry),
      secure: true,
    });
    createCookieClient({
      name: "refreshToken",
      value: data?.refreshToken,
      maxAge: Date.parse(data.expiry),
      secure: true,
    });

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(payload);
  };

  return { handleFormSubmit, ...action };
};

export default useLogin;
