import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig } from "axios";

export type FetcherMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type FetcherParamsType<T> = {
  method: FetcherMethod | Exclude<FetcherMethod, "GET"> | "GET";
  endpoint: string;
  payload?: T;
  options?: AxiosRequestConfig;
};

export type errorResponse = {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string>;
};

// useGet.ts
export type UseGet<T> = {
  endpoint: string;
  queryKey: QueryKey;
  queryOptions?: Omit<UseQueryOptions<T, Error, T>, "queryKey" | "queryFn">;
  options?: AxiosRequestConfig;
};

// useAction.ts
type FetcherMethodWithoutGet = Exclude<FetcherMethod, "GET">;

export type UseAction<T, K> = {
  method: FetcherMethodWithoutGet;
  endpoint: string;
  mutationOptions?: Omit<UseMutationOptions<T, AxiosError, K>, "mutationFn">;
  options?: AxiosRequestConfig;
};
