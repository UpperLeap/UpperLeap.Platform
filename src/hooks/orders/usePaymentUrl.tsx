"use client";

import { useAction } from "../api/useAction";

const usePaymentUrl = () => {
  const { mutate, ...actions } = useAction({
    endpoint: "/orders",
    method: "POST",
    mutationOptions: {
      onSuccess: (data: { paymentUrl: string }) => {
        window.location.href = data.paymentUrl;
      },
    },
  });

  return { ...actions, mutate };
};

export default usePaymentUrl;
