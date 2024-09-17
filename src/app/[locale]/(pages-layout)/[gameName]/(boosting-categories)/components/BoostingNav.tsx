"use client";

import { gamesData } from "@/data/gamesData";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import React from "react";

const BoostingNav = ({
  gameName,
  locale,
}: {
  gameName: string;
  locale: string;
}) => {
  const t = useTranslations();
  const pathname = usePathname();
  const gameData = gamesData[gameName as keyof typeof gamesData];
  if (!gameData) {
    notFound();
  }

  return (
    <div className="flex items-center gap-1 flex-wrap mobile:justify-center">
      {gameData.boostingCategories.map((category) => (
        <Link
          href={`/${locale}/${gameName}/${category.path}`}
          key={category.path}
          className={cn(
            "text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-foreground-secondary/20",
            pathname?.includes(category.path) &&
              "text-foreground bg-foreground-secondary/20",
          )}
        >
          {t(category.name)}
        </Link>
      ))}
    </div>
  );
};

export default BoostingNav;
