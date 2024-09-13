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
    if (data?.accessToken) {
      createCookieClient({
        name: "accessToken",
        value: data.accessToken,
        maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
        secure: true,
      });

      axiosInstance.defaults.headers.common["Authorization"] =
        `${TOKEN_TYPE} ${data.accessToken}`;
    }

    if (data?.refreshToken) {
      createCookieClient({
        name: "refreshToken",
        value: data.refreshToken,
        maxAge: Math.floor((Date.parse(data.expiry) - Date.now()) / 1000),
        secure: true,
      });
    }

    // Refetch all queries or specify particular queries if needed
    queryClient.invalidateQueries();
  };

  const { mutate, isPending, isError, isSuccess, error, data } = useMutation({
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

  return { mutate, isPending, isError, isSuccess, error, data };
};
