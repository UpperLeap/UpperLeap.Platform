"use client";

import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAction } from "../api/useAction";
import { useLogout } from "../auth/useLogout";

const useDeleteAccount = (user: User) => {
  const t = useTranslations();
  const router = useRouter();
  const { clearData: logout } = useLogout();
  const [username, setUsername] = useState("");

  const onSuccess = () => {
    logout();
    router.push("/");
    router.refresh();
    toast.success(t("settings.deleteAccountSuccess"));
  };

  const { mutate, isPending } = useAction({
    method: "DELETE",
    endpoint: "/authentication/me",
    mutationOptions: {
      onSuccess,
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      email: user.email,
      user,
    });
  };

  return { handleSubmit, isPending, username, setUsername };
};

export default useDeleteAccount;
