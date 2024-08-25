import { BASE_URL, TOKEN_TYPE } from "@/constants/api";
import { getCookieClient } from "@/services/cookies/cookiesClient";
import axios from "axios";

const accessToken = getCookieClient("accessToken");

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

if (accessToken) {
  axiosInstance.defaults.headers.common["Authorization"] =
    `${TOKEN_TYPE} ${accessToken.value}`;
}
