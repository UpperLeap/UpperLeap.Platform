"use client";

import useLogin from "@/hooks/auth/useLogin";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const ResentOtp = () => {
  const t = useTranslations();
  const { handleFormSubmit, isPending } = useLogin(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResend = () => {
    handleFormSubmit();
    setTimer(60);
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
        <span>{t("auth.resendAgainAfter")} {timer}s</span>
      )}
    </div>
  );
};

export default ResentOtp;
