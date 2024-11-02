"use client";

import { Input } from "@/components/ui/Input";
import { useAction } from "@/hooks/api/useAction";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const GetNotifiedForm = () => {
  const t = useTranslations();
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useAction({
    method: "POST",
    endpoint: "/newsletter/subscribe",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email });
  };

  return (
    <>
      <form className="flex items-center gap-1 mt-5" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("cms.emailPlaceholder")}
          className="flex-grow"
        />
        <Button
          type="submit"
          isLoading={isPending}
          isDisabled={isPending || !email}
          radius="sm"
          size="sm"
          className="h-9 !px-4 text-white"
          color="secondary"
        >
          {t("gameProfile.getNotified")}
        </Button>
      </form>
      <p className="text-sm mt-1">{t("gameProfile.emailUsage")}</p>
    </>
  );
};

export default GetNotifiedForm;
