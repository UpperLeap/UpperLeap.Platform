"use client";

import useChatDataStore from "@/stores/chat";
import { useTranslations } from "next-intl";

const ActiveState = () => {
  const t = useTranslations();
  const { isActive } = useChatDataStore();

  if (!isActive) return null;

  return (
    <div className="flex items-center gap-1 absolute top-14 right-2 px-2 py-1 bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      <span>{t("orders.activeState")}</span>
    </div>
  );
};

export default ActiveState;
