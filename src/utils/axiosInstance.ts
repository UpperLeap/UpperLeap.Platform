import { getAuthenticationCookies } from "@/app/actions/auth";
import { BASE_URL, TOKEN_TYPE } from "@/constants/api";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const setAuthHeader = async () => {
  const accessToken = (await getAuthenticationCookies()).accessToken;

  if (accessToken) {
    axiosInstance.defaults.headers.common["Authorization"] =
      `${TOKEN_TYPE} ${accessToken.value}`;
  }
}