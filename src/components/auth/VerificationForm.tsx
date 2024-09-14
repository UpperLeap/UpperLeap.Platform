"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useLogin from "@/hooks/auth/useLogin";
import useModalStore from "@/stores/auth_modal";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import ResentOtp from "./ResentOtp";

const VerificationForm = () => {
  const t = useTranslations();
  const { setModalData, payload } = useModalStore();
  const { handleFormSubmit, isPending } = useLogin(true);

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className="mx-auto w-fit">
        <InputOTP
          maxLength={6}
          className="text-foreground"
          value={payload.otp}
          onChange={(value) =>
            setModalData({ payload: { ...payload, otp: value } })
          }
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <ResentOtp />
      <div className="flex items-center gap-2">
        <Button
          color="default"
          radius="sm"
          isDisabled={isPending}
          className="mt-10 w-full capitalize"
          size="sm"
          onPress={() =>
            setModalData({
              currentTab: "login",
            })
          }
        >
          {t("common.cancel")}
        </Button>
        <Button
          color="secondary"
          size="sm"
          radius="sm"
          isDisabled={!payload.email || payload.otp.length !== 6 || isPending}
          className="mt-10 w-full capitalize text-white"
          type="submit"
        >
          {t("auth.verify")}
        </Button>
      </div>
    </form>
  );
};

export default VerificationForm;
