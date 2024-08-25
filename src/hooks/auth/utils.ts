import { TOKEN_TYPE } from "@/constants/api";
import { createCookieClient } from "@/services/cookies/cookiesClient";
import { axiosInstance } from "@/utils/axiosInstance";

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export const AuthSuccess = (data: AuthResponse) => {
  createCookieClient({
    name: "accessToken",
    value: data?.accessToken,
    maxAge: 1000 * 60 * 60 * 24 * 30 * 6, // 6 months
    secure: true,
  });
  createCookieClient({
    name: "refreshToken",
    value: data?.refreshToken,
    maxAge: 1000 * 60 * 60 * 2, // 2 hours,
    secure: true,
  });

  axiosInstance.defaults.headers.common["Authorization"] =
    `${TOKEN_TYPE} ${data?.accessToken}`;
};
