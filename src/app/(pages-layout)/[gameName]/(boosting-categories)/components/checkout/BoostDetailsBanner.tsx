"use client";

import { gamesData } from "@/data/gamesData";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import RankChip from "./RankChip";
import WinsChip from "./WinsChip";

const BoostDetailsBanner = () => {
  const t = useTranslations();
  const { gameName } = useParams();
  const pathname = usePathname().split("/").pop();
  const gameData = gamesData[gameName as keyof typeof gamesData];
  const detailsBanner =
    gameData?.detailsBanner[pathname as keyof typeof gameData.detailsBanner];

  return (
    <div className="p-3 flex items-center justify-center gap-4 bg-foreground-secondary/10 text-foreground min-h-[45px]">
      {detailsBanner?.current === "rank" && <RankChip />}
      {detailsBanner?.current === "unrated" && (
        <p>{t(`gameProfile.unrated`)}</p>
      )}
      <div>
        <FaArrowRightLong />
      </div>
      {detailsBanner?.desired === "rank" && <RankChip isDesired />}
      {detailsBanner?.desired === "wins" && <WinsChip />}
    </div>
  );
};

export default BoostDetailsBanner;
