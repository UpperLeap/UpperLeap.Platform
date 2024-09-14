"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Input } from "../ui/Input";
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";
import useModalStore from "@/stores/auth_modal";
import useLogin from "@/hooks/auth/useLogin";
import Link from "next/link";

const RegisterForm = () => {
  const t = useTranslations();
  const { setModalData, payload } = useModalStore();
  const { handleFormSubmit, isPending } = useLogin();

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => handleFormSubmit(e)}>
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
      <Input
        type="text"
        id="username"
        className="text-foreground placeholder:capitalize"
        placeholder={t("auth.usernamePlaceholder")}
        value={payload?.username}
        onChange={(e) =>
          setModalData({ payload: { ...payload, username: e.target.value } })
        }
      />
      <div className="flex items-center gap-1 flex-wrap text-sm">
        <span>{t("auth.byProceeding")}</span>
        <Link href="/terms-of-service" className="text-primary hover:underline">
          {t("footer.tos")}
        </Link>
        <span>&</span>
        <Link href="/terms-of-service" className="text-primary hover:underline">
          {t("footer.privacyPolicy")}
        </Link>
      </div>
      <Button
        radius="sm"
        color="secondary"
        isDisabled={!payload.email || isPending}
        isLoading={isPending}
        className="w-full text-white mt-3"
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

export default RegisterForm;
