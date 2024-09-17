import { gamesData } from "@/data/gamesData";
import { useTranslations } from "next-intl";
import React from "react";

const Disclaimer = ({ gameName }: { gameName: string }) => {
  const t = useTranslations();
  const gameData = gamesData[gameName as keyof typeof gamesData];

  return (
    <div className="max-w-large mx-auto px-10 mb-20 mobile:px-5">
      <p className="text-foreground-secondary">{t(gameData?.disclaimer)}</p>
    </div>
  );
};

export default Disclaimer;
