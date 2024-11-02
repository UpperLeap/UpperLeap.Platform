"use client";

import { Input } from "@/components/ui/Input";
import { useAction } from "@/hooks/api/useAction";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaNewspaper } from "react-icons/fa6";

const NewsLater = () => {
  const t = useTranslations();
  const [email, setEmail] = useState("");

  const { mutate, isPending, isSuccess } = useAction({
    method: "POST",
    endpoint: "/newsletter/subscribe",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email });
  };

  return (
    <div className="p-5 border-1 border-foreground-secondary/20 rounded-lg w-full">
      <div className="flex items-center gap-2 text-foreground">
        <span>
          <FaNewspaper />
        </span>
        <p className="text-lg font-bold">{t("cms.newsletter")}</p>
      </div>
      <p className="text-sm text-foreground-secondary mt-3 mb-4">
        {t("cms.newsletterDescription")}
      </p>
      {!isSuccess && (
        <form className="flex items-center gap-1" onSubmit={handleSubmit}>
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
            {t("cms.subscribe")}
          </Button>
        </form>
      )}
      {isSuccess && (
        <p className="bg-green-500/20 relative font-semibold border-1 border-green-500/70 text-green-500 p-1 rounded-md text-center flex items-center justify-center text-sm">
          {t("cms.newsletterSubscribed")}
        </p>
      )}
    </div>
  );
};

export default NewsLater;
