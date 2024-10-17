import { gamesData } from "@/data/gamesData";
import BoostingList from "../components/BoostingList";
import { Metadata } from "next";

export function generateMetadata({
  params: { gameName },
}: {
  params: { gameName: string };
}): Metadata {
  const gameNameCapitalized =
    gameName.charAt(0).toUpperCase() + gameName.slice(1);
  return {
    title: `${gameNameCapitalized} Boosting Services`,
    description: `Boosting services for ${gameNameCapitalized}`,
  };
}

export default function BoostingPage({
  params: { gameName },
}: {
  params: { gameName: string };
}) {
  const gameData = gamesData[gameName as keyof typeof gamesData];

  return (
    <div>
      <BoostingList
        boostingCategories={gameData?.boostingCategories}
        gameName={gameName}
      />
    </div>
  );
}
