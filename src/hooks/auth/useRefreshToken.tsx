"use client";
import useRefreshStateStore from "@/stores/refresh_token";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { requestHandler } from "../api/utils";
import { useLogout } from "./useLogout";
import { AuthResponse, AuthSuccess } from "./utils";

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
    AuthSuccess(data);

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
