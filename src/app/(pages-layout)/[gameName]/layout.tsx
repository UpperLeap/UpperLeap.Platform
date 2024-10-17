import React from "react";
import GameNav from "./components/GameNav";
import Services from "../(landing)/components/Services";
import Faq from "../(landing)/components/Faq";
import Disclaimer from "./components/Disclaimer";
import GameHeader from "./components/GameHeader";
import { notFound } from "next/navigation";
import { getGame } from "@/services/games";
import GameData from "./components/GameData";
import GameComingSoon from "./components/GameComingSoon";

export default async function GameLayout({
  children,
  params: { gameName },
}: {
  children: React.ReactNode;
  params: { gameName: string; locale: string };
}) {
  let game;

  try {
    game = await getGame(gameName);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <GameData game={game} />
      <GameNav isTabsDisabled={game.isUpcoming || game.isDisabled} />
      <div className="z-[1] relative max-w-wide mx-auto px-10 mt-10 mobile:px-5 flex flex-col gap-14">
        {game.isUpcoming ? (
          <GameComingSoon game={game} />
        ) : (
          <>
            <GameHeader gameName={gameName} />
            {children}
          </>
        )}
      </div>
      <Services />
      <Faq />
      <Disclaimer gameName={gameName} />
    </>
  );
}
