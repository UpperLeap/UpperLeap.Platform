"use client";

import useCoverStore from "@/stores/cover";
import { BasicGame } from "@/types/game";
import { cn } from "@/utils/utils";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }: { game: BasicGame }) => {
  const t = useTranslations();
  const { setGameName } = useCoverStore();
  const gameSlug = game.name.replaceAll(" ", "-").toLowerCase();

  return (
    <Tooltip
      radius="sm"
      isDisabled={!game.isUpcoming}
      content={t("gameProfile.comingSoon")}
    >
      <Link
        className={cn(
          "flex flex-col gap-4",
          game.isUpcoming ? "opacity-50" : "opacity-100",
        )}
        href={game.isDisabled ? "" : `/${gameSlug}`}
        onMouseEnter={() => {
          setGameName(gameSlug);
        }}
        onClick={(e) => {
          if (game.isDisabled) e.preventDefault();
        }}
      >
        <div className="game-card-wrapper">
          <Image
            className="game-logo"
            placeholder="blur"
            blurDataURL={game.imageUrl}
            src={game.imageUrl}
            loading="lazy"
            alt={`${game.name} logo`}
            width={190}
            height={250}
            style={{ height: "auto" }}
          />
        </div>
        <p className="text-left text-foreground font-bold">{game.name}</p>
      </Link>
    </Tooltip>
  );
};

export default GameCard;
