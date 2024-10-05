"use client";

import { Credential } from "@/types/order";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { useGet } from "../api/useGet";
import { useParams } from "next/navigation";
import { useAction } from "../api/useAction";
import toast from "react-hot-toast";

const useCredentials = (
  orderCredentials: Credential | undefined,
  refetch: () => void,
) => {
  const t = useTranslations();
  const { orderId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [credentialsPayload, setCredentialsPayload] = useState({
    orderId: orderId,
    username: orderCredentials?.username || "",
    password: orderCredentials?.password || "",
    isTwoFactorEnabled: orderCredentials?.isTwoFactorEnabled || false,
  });

  const { mutate, isPending } = useAction({
    endpoint: `/orders/${orderId}/credentials`,
    method: "POST",
    mutationOptions: {
      onSuccess: () => {
        refetch();
        toast.success(t("orders.credentialsUpdatedSuccessfully"));
        setIsOpen(false);
      },
    },
  });

  const updateCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(credentialsPayload);
  };

  const isSaveEnabled = useMemo(() => {
    return orderCredentials?.username !== credentialsPayload.username || orderCredentials?.password !== credentialsPayload.password || !orderCredentials?.isTwoFactorEnabled;
  }, [orderCredentials, credentialsPayload]);

  return {
    isPending,
    updateCredentials,
    isSaveEnabled,
    credentialsPayload,
    setCredentialsPayload,
    isOpen,
    setIsOpen,
  };
};

export default useCredentials;
