"use client";
import useRefreshStateStore from "@/stores/refresh_token";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { requestHandler } from "../api/utils";
import { useLogout } from "./useLogout";
import { AuthResponse } from "@/types/globals";
import { createCookieClient } from "@/services/cookies/cookiesClient";
import { axiosInstance } from "@/utils/axiosInstance";
import { TOKEN_TYPE } from "@/constants/api";

interface RefreshTokenRequest {
  refreshToken: string;
}

export const useRefreshToken = () => {
  const { clearData: logout } = useLogout();
  const queryClient = useQueryClient();
  const { setIsRefreshing } = useRefreshStateStore();

  const onError = () => {
    logout();
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

    // refetch all queries
    queryClient.invalidateQueries();
  };

  const { mutate, ...action } = useMutation({
    mutationFn: (payload: RefreshTokenRequest) =>
      requestHandler({
        method: "POST",
        endpoint: "/auth/refresh",
        payload,
      }),
    onError,
    onSuccess,
    onSettled: () => {
      setIsRefreshing(false);
    },
  });

  return { mutate, ...action };
};
