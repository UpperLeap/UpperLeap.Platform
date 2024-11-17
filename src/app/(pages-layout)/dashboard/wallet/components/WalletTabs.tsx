"use client";

import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WalletTabs = ({ isBooster }: { isBooster: boolean }) => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      <Link
        href="/dashboard/wallet/transactions"
        className={cn(
          "text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-foreground-secondary/20",
          pathname?.includes("transactions") &&
            "text-foreground bg-foreground-secondary/20",
        )}
      >
        {t("transactions.transactions")}
      </Link>
      {isBooster && (
        <Link
          href="/dashboard/wallet/withdrawals"
          className={cn(
            "text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-foreground-secondary/20",
            pathname?.includes("withdrawals") &&
              "text-foreground bg-foreground-secondary/20",
          )}
        >
          {t("transactions.withdrawals")}
        </Link>
      )}
    </div>
  );
};

export default WalletTabs;
