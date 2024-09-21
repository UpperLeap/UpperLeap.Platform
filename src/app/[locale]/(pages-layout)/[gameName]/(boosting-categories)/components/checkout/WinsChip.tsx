"use client";

import useOrderDataStore from "@/stores/order";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const WinsChip = () => {
  const t = useTranslations();
  const { winAmount } = useOrderDataStore();
  const pathname = usePathname().split("/").pop();

  return (
    <div className="flex items-center gap-2">
      <span>{winAmount}</span>
      <span>{t(`gameProfile.${pathname === "win-boost" ? "wins" : "matches"}`)}</span>
    </div>
  );

};

export default WinsChip;
