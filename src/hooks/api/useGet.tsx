"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";

import { useError } from "./useError";
import type { UseGet, errorResponse } from "./types";
import { requestHandler } from "./utils";

export const useGet = <T,>({
  endpoint,
  queryKey,
  queryOptions,
  options,
}: UseGet<T>) => {
  const { errorHandler } = useError();
  const results = useQuery<T, Error>({
    ...queryOptions,
    queryKey,
    queryFn: () => requestHandler<T>({ endpoint, method: "GET", options }),
  });

  const error = results?.error as AxiosError<errorResponse>;
  useEffect(() => {
    if (error) errorHandler(error);
  }, [error, errorHandler]);

  return { ...results, error } as UseQueryResult<T, AxiosError>;
};
