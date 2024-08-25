"use client";
import { getCookieClient } from "@/services/cookies/cookiesClient";
import useRefreshStateStore from "@/stores/refresh_token";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { useLogout } from "../auth/useLogout";
import { useRefreshToken } from "../auth/useRefreshToken";
import { errorResponse } from "./types";

export const useError = () => {
  const { mutate: refreshTokenMutate } = useRefreshToken();
  const { clearData: logoutMutate } = useLogout();
  const { isRefreshing, setIsRefreshing } = useRefreshStateStore();

  const toastError = (error: AxiosError<errorResponse>) => {
    if (error?.message) return toast.error(error?.message);

    toast.error("An error occurred");
  };

  const errorHandler = (error: AxiosError<errorResponse>) => {
    if (error?.response?.status === 401) {
      const refreshToken = getCookieClient("refreshToken");
      if (refreshToken && !isRefreshing) {
        setIsRefreshing(true);
        refreshTokenMutate({ refreshToken: refreshToken?.value });
      } else if (!refreshToken && !isRefreshing) {
        logoutMutate();
      }

      return;
    }

    toastError(error);
  };

  return { errorHandler };
};
