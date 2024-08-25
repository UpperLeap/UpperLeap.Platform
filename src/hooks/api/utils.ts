import { axiosInstance } from "@/utils/axiosInstance";
import type { FetcherParamsType } from "./types";

export const requestHandler = async <T>(fetcherParams: FetcherParamsType<T>) =>
  await axiosInstance
    .request({
      method: fetcherParams.method,
      url: fetcherParams.endpoint,
      ...(fetcherParams.payload && { data: fetcherParams.payload }),
      ...(fetcherParams.options && fetcherParams.options),
    })
    .then((res) => res.data);
