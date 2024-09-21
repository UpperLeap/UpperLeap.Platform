"use client";

import useLogin from "@/hooks/auth/useLogin";
import useModalStore from "@/stores/auth_modal";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const ResendOtp = () => {
  const t = useTranslations();
  const { errorStatus } = useModalStore();
  const { handleFormSubmit, isPending } = useLogin(true);
  const [timer, setTimer] = useState(63); // Start with 63 seconds

  useEffect(() => {
    if (timer > 0 && errorStatus === 403) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, errorStatus]);

  const handleResend = async () => {
    handleFormSubmit();
    setTimer(63);
  };

  return (
    <div className="flex items-center justify-center text-sm mt-5 gap-1 flex-wrap">
      <p>{t("auth.didntReceiveCode")}</p>
      {timer === 0 ? (
        <button
          onClick={handleResend}
          disabled={isPending}
          className="hover:underline"
        >
          {t("auth.resend")}
        </button>
      ) : (
        <span>
          {t("auth.resendAgainAfter")} {timer}s
        </span>
      )}
    </div>
  );
};

export default ResendOtp;
