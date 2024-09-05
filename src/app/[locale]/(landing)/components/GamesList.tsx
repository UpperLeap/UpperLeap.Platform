"use client";
import Image from "next/image";
import Link from "next/link";

const GamesList = () => {
  const games = [
    {
      name: "Valorant",
      path: "/game/valorant",
      imageUrl:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/game-cover/val-min.webp", 
    },
    {
      name: "League of Legends",
      path: "/game/lol",
      imageUrl:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/game-cover/lol-min.webp",
    },
    {
      name: "Deadlock",
      path: "/game/deadlock",
      imageUrl:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/game-cover/deadlock.webp",
    },
    {
      name: "Counter-Strike 2",
      path: "/game/cs2",
      imageUrl:
        "https://blitz-cdn.blitz.gg/blitz/ui/img/game-cover/cs2-min.webp",
    },
  ];

  return (
    <div className="max-w-medium mx-auto mt-10 arc-wrapper">
      <div className="flex items-center gap-5 justify-around">
        {games.map((game, i) => (
          <Link key={i} className="flex flex-col gap-4" href={game.path}>
            <div
              className="game-card-wrapper"
            >
              <Image
                className="game-logo"
                src={game.imageUrl}
                loading="lazy"
                alt={`${game.name} logo`}
                width={190}
                height={253.3}
              />
            </div>
            <p className="text-left text-foreground font-bold">{game.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesList;
