"use client";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { useError } from "./useError";
import { UseAction, errorResponse } from "./types";
import { requestHandler } from "./utils";

export const useAction = <T, K extends T | undefined>({
  method,
  endpoint,
  mutationOptions,
  options,
}: UseAction<T, K>) => {
  const { errorHandler } = useError();
  const result = useMutation<T, AxiosError<errorResponse>, K>({
    onError: errorHandler,
    ...mutationOptions,
    mutationFn: (payload?: K) =>
      requestHandler<T>({ method, endpoint, payload, options }) as Promise<T>,
  });

  return result as UseMutationResult<T, AxiosError, unknown>;
};
