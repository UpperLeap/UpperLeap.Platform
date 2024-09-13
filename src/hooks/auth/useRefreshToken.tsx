"use client";

import useRefreshStateStore from "@/stores/refresh_token";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { requestHandler } from "../api/utils";
import { useLogout } from "./useLogout";
import { AuthResponse } from "@/types/globals";
import { createCookieClient } from "@/services/cookies/cookiesClient";
import { axiosInstance } from "@/utils/axiosInstance";
import { TOKEN_TYPE } from "@/constants/api";
import { setAuthenticationCookie } from "@/app/actions/auth";

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

  const onSuccess = async (data: AuthResponse) => {
    await setAuthenticationCookie(data);

    axiosInstance.defaults.headers.common["Authorization"] =
      `${TOKEN_TYPE} ${data.accessToken}`;

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
