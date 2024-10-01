"use client";

import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { errorResponse } from "./types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export const useError = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const urlQueries = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";

  const refreshToken = async () => {
    router.push("/api/refresh-session?redirectTo=" + pathname + urlQueries);
  };

  const errorHandler = (error: AxiosError<errorResponse>) => {
    if (error?.response?.status === 401) return refreshToken();

    toast.error(error?.message || t("errors.default"));
  };

  return { errorHandler };
};
