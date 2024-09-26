"use client";

import useCoverStore from "@/stores/cover";
import { BasicGame } from "@/types/game";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({ game }: { game: BasicGame }) => {
  const { setGameName } = useCoverStore();
  const gameSlug = game.name.replaceAll(" ", "-").toLowerCase();

  return (
    <Link
      className="flex flex-col gap-4"
      href={`/${gameSlug}`}
      onMouseEnter={() => {
        setGameName(gameSlug);
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
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <p className="text-left text-foreground font-bold">{game.name}</p>
    </Link>
  );
};

export default GameCard;
