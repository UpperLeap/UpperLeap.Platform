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
          "group flex flex-col gap-4 transition-all duration-300 hover:scale-105",
          game.isUpcoming ? "opacity-50" : "opacity-100"
        )}
        href={game.isDisabled ? "" : `/${gameSlug}`}
        onMouseEnter={() => {
          setGameName(gameSlug);
        }}
        onClick={(e) => {
          if (game.isDisabled) e.preventDefault();
        }}
      >
        <div className="game-card-wrapper relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            className="game-logo transition-transform duration-300 group-hover:scale-110"
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
        <p className="text-center text-foreground font-bold transition-colors duration-300 group-hover:text-primary">
          {game.name}
        </p>
      </Link>
    </Tooltip>
  );
};

export default GameCard;
