import AddToClipboard from "@/components/shared/AddToClipboard";
import { Credential } from "@/types/order";
import { useTranslations } from "next-intl";
import React from "react";

const Credentials = ({
  orderCredentials,
}: {
  orderCredentials: Credential;
}) => {
  const t = useTranslations();

  return (
    <div>
      <div className="grid grid-cols-2 border-b-1 border-foreground-secondary/20 last:border-none py-5">
        <h3 className="text-foreground font-medium text-sm">
          {t("orders.username")}
        </h3>
        <div className="flex items-center gap-1 text-sm">
          <span>{orderCredentials?.username}</span>
          <AddToClipboard key="username" text={orderCredentials?.username} />
        </div>
      </div>
      <div className="grid grid-cols-2 border-b-1 border-foreground-secondary/20 last:border-none py-5">
        <h3 className="text-foreground font-medium text-sm">
          {t("orders.password")}
        </h3>
        <div className="flex items-center gap-1 text-sm">
          <span>**********</span>
          <AddToClipboard key="password" text={orderCredentials?.password} />
        </div>
      </div>
      <div className="grid grid-cols-2 py-5">
        <h3 className="text-foreground font-medium text-sm">
          {t("orders.twoFactorAuth")}
        </h3>
        <div className="flex items-center gap-1 capitalize text-sm">
          <span
            className={
              orderCredentials?.isTwoFactorEnabled
                ? "text-green-500"
                : "text-red-600"
            }
          >
            {orderCredentials?.isTwoFactorEnabled
              ? t("orders.enabled")
              : t("orders.disabled")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
