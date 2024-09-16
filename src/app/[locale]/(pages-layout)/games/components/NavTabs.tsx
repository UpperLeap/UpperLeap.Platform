"use client";

import { gamesData } from "@/data/gamesData";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Tooltip } from "@nextui-org/tooltip";

const NavTabs = () => {
  const t = useTranslations();
  const { locale, gameName } = useParams();
  const gameData = gamesData[gameName as keyof typeof gamesData];

  return (
    <div className="flex items-center">
      {gameData?.tabs.map((tab) => (
        <Tooltip
          placement="bottom"
          key={tab.name}
          isDisabled={tab.isActive}
          content={t("gameProfile.comingSoon")}
        >
          <Link
            aria-disabled={!tab.isActive}
            href={
              tab.isActive ? `/${locale}/games/${gameName}/${tab.path}` : ""
            }
            style={{
              opacity: !tab.isActive ? 0.5 : 1,
            }}
            className="flex items-center gap-2 px-4 text-sm py-5 hover:text-foreground hover:bg-opacity-70 duration-300 transition-all hover:bg-gradient-to-t from-foreground-secondary/20 to-background-secondary/30"
          >
            <span>
              <tab.icon className="text-lg" />
            </span>
            <span>{t(tab.name)}</span>
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default NavTabs;
