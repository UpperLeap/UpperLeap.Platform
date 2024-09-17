import { gamesData } from "@/data/gamesData";
import BoostingList from "../components/BoostingList";

export default function BoostingPage({
  params: { gameName, locale },
}: {
  params: { gameName: string; locale: string };
}) {
  const gameData = gamesData[gameName as keyof typeof gamesData];

  return (
    <div>
      <BoostingList
        boostingCategories={gameData?.boostingCategories}
        gameName={gameName}
        locale={locale}
      />
    </div>
  );
}
