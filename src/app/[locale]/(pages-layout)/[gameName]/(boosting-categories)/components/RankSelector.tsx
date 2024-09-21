"use client";

import { Ranks } from "@/data/valorant";
import useOrderDataStore from "@/stores/order";
import { cn } from "@/utils/utils";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";
import Image from "next/image";

const RankSelector = ({
  ranks,
  isDesiredRank,
}: {
  ranks: Ranks[];
  isDesiredRank: boolean;
}) => {
  const t = useTranslations();
  const { currentRank, setOrderData, desiredRank } = useOrderDataStore();
  const rankData = isDesiredRank ? desiredRank : currentRank;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {ranks.map((rank) => (
        <Tooltip
          placement="top"
          className="capitalize"
          radius="sm"
          key={rank.title}
          content={t(`${rank.name}`)}
        >
          <button
            onClick={() =>
              setOrderData(
                isDesiredRank ? { desiredRank: rank } : { currentRank: rank },
              )
            }
            className={cn(
              "px-5 py-3 rounded-lg bg-background/60 hover:bg-foreground-secondary/20 duration-300",
              rankData.title === rank.title && "bg-foreground-secondary/20",
            )}
          >
            <Image src={rank.image} alt={rank.name} width={35} height={35} />
          </button>
        </Tooltip>
      ))}
    </div>
  );
};

export default RankSelector;
