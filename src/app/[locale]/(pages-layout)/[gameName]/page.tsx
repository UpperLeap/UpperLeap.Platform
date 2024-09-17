import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { gamesData } from "@/data/gamesData";
import BoostingList from "./components/BoostingList";

export default async function GamePage({
  params: { gameName, locale },
}: {
  params: { gameName: string; locale: string };
}) {
  const gameData = gamesData[gameName as keyof typeof gamesData];
  if (!gameData) {
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
        locale={locale}
      />
    </div>
  );
}
