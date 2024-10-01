"use client";

import { cn } from "@/utils/utils";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import { IoSettings, IoSwapVertical } from "react-icons/io5";

const DashboardTabs = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const tabs = [
    {
      name: t("dashboard.orders.title"),
      path: "/dashboard/orders",
      icon: <BsCart4 />,
      isActive: true,
    },
    {
      name: t("dashboard.transactions.title"),
      path: "/dashboard/transactions",
      icon: <IoSwapVertical />,
      isActive: true,
    },
    {
      name: t("dashboard.settings.title"),
      path: "/dashboard/settings",
      icon: <IoSettings />,
      isActive: true,
    },
  ];

  return (
    <div className="flex items-center">
      {tabs.map((tab) => (
        <Tooltip
          placement="bottom"
          key={tab.name}
          isDisabled={tab.isActive}
          content={t("gameProfile.comingSoon")}
        >
          <Link
            aria-disabled={!tab.isActive}
            href={tab.path}
            style={{
              opacity: !tab.isActive ? 0.5 : 1,
            }}
            className={cn(
              "flex items-center gap-2 px-4 text-sm py-5 hover:text-foreground hover:bg-opacity-70 duration-300 transition-all hover:bg-gradient-to-t from-foreground-secondary/20 to-background-secondary/30",
              pathname.includes(tab.path) &&
                "text-foreground bg-opacity-70 bg-gradient-to-t",
            )}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.name}</span>
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default DashboardTabs;
