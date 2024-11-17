import { useGet } from "@/hooks/api/useGet";
import { getGames } from "@/services/games";
import { useNavbarStore } from "@/stores/navbar";
import { BasicGame } from "@/types/game";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GamesList = () => {
  const { closeNavbar } = useNavbarStore();
  const { data: games } = useGet<BasicGame[]>({
    endpoint: "/games",
    queryKey: ["games"],
  });

  if (games) {
    return (
      <div className="flex flex-col gap-5">
        {games
          .filter((game) => game.isVisible)
          .map((game) => (
            <Link
              onClick={closeNavbar}
              href={`/${game.name.replaceAll(" ", "-").toLowerCase()}`}
              key={game.id}
              className="flex items-center gap-2 group hover:text-foreground duration-300 py-2 px-3 hover:bg-default/20 rounded-md"
            >
              {game.iconUrl && (
                <Image
                  src={game.iconUrl}
                  alt={game?.name}
                  width={30}
                  height={30}
                />
              )}
              <p className="capitalize">{game.name.toLowerCase()}</p>
            </Link>
          ))}
      </div>
    );
  }
};

export default GamesList;
