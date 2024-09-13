"use client";

import { useAuthStore } from "@/stores/auth";
import { useGet } from "../api/useGet";
import { useEffect } from "react";
import { User } from "@/types/user";

const useUser = () => {
  const { setAuth } = useAuthStore();
  const { data, isLoading, isSuccess } = useGet<User>({
    endpoint: "/authentication/me",
    queryKey: ["user-data"],
  });

  useEffect(() => {
    if (isSuccess) {
      setAuth({ user: data });
    }
  }, [data]);

  return { data, isLoading };
};

export default useUser;
