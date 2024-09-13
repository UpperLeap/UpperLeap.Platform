"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Input } from "../ui/Input";
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";
import useModalStore from "@/stores/auth_modal";
import useLogin from "@/hooks/auth/useLogin";

const LoginForm = () => {
  const t = useTranslations();
  const { setModalData, payload } = useModalStore();
  const { handleFormSubmit, isPending } = useLogin();

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => handleFormSubmit(e)}>
      <div>
        <Input
          type="email"
          required
          id="email"
          className="text-foreground placeholder:capitalize"
          placeholder={t("auth.emailPlaceholder")}
          value={payload?.email}
          onChange={(e) =>
            setModalData({ payload: { ...payload, email: e.target.value } })
          }
        />
      </div>
      <Button
        radius="sm"
        isDisabled={!payload.email || isPending}
        isLoading={isPending}
        color="secondary"
        className="w-full mt-3 text-white"
        type="submit"
      >
        {t("common.continue")}
        <span>
          <FaArrowRightLong />
        </span>
      </Button>
    </form>
  );
};

export default LoginForm;
