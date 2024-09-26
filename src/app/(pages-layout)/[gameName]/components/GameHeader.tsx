"use client";

import { gamesData } from "@/data/gamesData";
import { PageHeaderData } from "@/data/valorant";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { notFound, usePathname } from "next/navigation";
import React from "react";

const GameHeader = ({ gameName }: { gameName: string }) => {
  const t = useTranslations();
  const pathnameArray = usePathname()?.split("/") || [];
  const gameData = gamesData[gameName as keyof typeof gamesData];
  if (!gameData) {
    notFound();
  }
  const currentPage =
    pathnameArray.length > 3 ? pathnameArray[pathnameArray.length - 1] : "main";
  const pageData: PageHeaderData = gameData[
    currentPage as keyof typeof gameData
  ] as PageHeaderData;

  return (
    <div className="flex items-center gap-5 ">
      <div
        className={cn(
          "p-3 rounded-full bg-background-secondary border-1 border-foreground-secondary/20",
          pageData?.image ? "p-3" : "p-4",
        )}
      >
        {pageData?.image && (
          <Image
            src={pageData.image}
            alt={`${gameName} logo`}
            width={30}
            height={30}
            loading="lazy"
            className="invert dark:invert-0 grayscale"
          />
        )}
        {pageData?.icon && (
          <span className="text-2xl text-foreground-secondary">
            {React.createElement(pageData.icon)}
          </span>
        )}
      </div>
      <div>
        <h1 className="text-2xl text-foreground font-semibold">
          {t(pageData?.title)}
        </h1>
        <p className="text-sm text-foreground-secondary">
          {t(pageData?.subTitle)}
        </p>
      </div>
    </div>
  );
};

export default GameHeader;
