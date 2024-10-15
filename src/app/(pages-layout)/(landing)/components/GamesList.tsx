import RequestError from "@/components/shared/RequestError";
import { getGames } from "@/services/games";
import GameCard from "./GameCard";

const GamesList = async () => {
  let games;

  try {
    games = await getGames();
  } catch (error) {
    return <RequestError />;
  }

  if (games) {
    return (
      <div className="max-w-medium mx-auto mt-10 arc-wrapper px-5">
        <div className="flex items-center gap-5 justify-around flex-wrap">
          {games
            .filter((game) => game.isVisible)
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>
    );
  }
};

export default GamesList;
