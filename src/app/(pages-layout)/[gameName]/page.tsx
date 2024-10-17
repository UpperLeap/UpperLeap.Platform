import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { gamesData } from "@/data/gamesData";
import BoostingList from "./components/BoostingList";
import { Metadata } from "next";

export function generateMetadata({
  params: { gameName },
}: {
  params: { gameName: string };
}): Metadata {
  const gameNameCapitalized =
    gameName?.charAt(0)?.toUpperCase() + gameName?.slice(1);
  return {
    title: `${gameNameCapitalized} Services`,
    description: `Services for ${gameNameCapitalized}`,
  };
}

export default async function GamePage({
  params: { gameName },
}: {
  params: { gameName: string };
}) {
  let gameData;

  try {
    gameData = gamesData[gameName as keyof typeof gamesData];
  } catch (error) {
    notFound();
  }

  const t = await getTranslations();

  return (
    <div>
      <h3 className="text-2xl font-semibold text-foreground mb-4">
        {t("gameProfile.boosting")}
      </h3>
      <BoostingList
        boostingCategories={gameData?.boostingCategories}
        gameName={gameName}
      />
    </div>
  );
}
