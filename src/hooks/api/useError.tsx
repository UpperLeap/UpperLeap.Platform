"use client";

import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { errorResponse } from "./types";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const useError = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const refreshToken = async () => {
    router.push("/api/refresh-session?redirectTo=" + pathname);
  };

  const errorHandler = (error: AxiosError<errorResponse>) => {
    if (error?.response?.status === 401) return refreshToken();

    toast.error(error?.message || t("errors.default"));
  };

  return { errorHandler };
};
