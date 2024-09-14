import RequestError from "@/components/shared/RequestError";
import { getGames } from "@/services/games";
import Image from "next/image";
import Link from "next/link";

const GamesList = async () => {
  let games;

  try {
    games = await getGames();
  } catch (error) {
    return <RequestError />;
  }

  return (
    <div className="max-w-medium mx-auto mt-10 arc-wrapper px-5">
      <div className="flex items-center gap-5 justify-around flex-wrap">
        {games.map((game, i) => (
          <Link
            key={i}
            className="flex flex-col gap-4"
            href={`/games/${game.id}`}
          >
            <div className="game-card-wrapper">
              <Image
                className="game-logo"
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
        ))}
      </div>
    </div>
  );
};

export default GamesList;
