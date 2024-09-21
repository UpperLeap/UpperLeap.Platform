"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import RankSelector from "./RankSelector";
import DivisionSelector from "./DivisionSelector";
import AdditionalOptionsSelector from "./AdditionalOptionsSelector";
import useRankPicker from "@/hooks/orders/useRankPicker";

const RankPicker = ({ isDesiredRank = false }: { isDesiredRank?: boolean }) => {
  const t = useTranslations();
  const { rankData, visibleRanks, gameData, visibleOptionsList } =
    useRankPicker(isDesiredRank);

  return (
    <div className="bg-background-secondary/70 rounded-lg relative overflow-hidden border-1 border-foreground-secondary/10">
      <span
        className="absolute top-0 -left-5 w-5/12 h-8 rounded-full rounded-tl-none bg-foreground-secondary/20 blur-3xl opacity-50 z-[0]"
        style={{ backgroundColor: rankData?.color }}
      />
      <div className="flex items-center gap-5 p-5 border-b-1 border-foreground-secondary/20 relative z-[1]">
        <div className="p-4 rounded-full bg-background/60 border-1 border-foreground-secondary/20 min-h-[70px] aspect-square">
          {rankData?.image && (
            <Image
              src={rankData?.image}
              alt={rankData?.name}
              width={35}
              height={35}
            />
          )}
        </div>
        <div>
          <h3 className="text-foreground font-semibold text-lg">
            {isDesiredRank
              ? t("gameProfile.desiredRank")
              : t("gameProfile.currentRank")}
          </h3>
          <p className="text-sm">
            {isDesiredRank
              ? t("gameProfile.desiredRankDescription")
              : t("gameProfile.currentRankDescription")}
          </p>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <RankSelector ranks={visibleRanks} isDesiredRank={isDesiredRank} />
        {rankData.isDivisionsVisible && (
          <DivisionSelector
            divisions={gameData.divisions}
            isDesiredRank={isDesiredRank}
          />
        )}
        {!isDesiredRank && (
          <div className="mt-10">
            <AdditionalOptionsSelector
              gameOptions={gameData.options}
              visibleOptionsList={visibleOptionsList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RankPicker;
