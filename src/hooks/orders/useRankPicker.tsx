"use client";

import { gamesData } from "@/data/gamesData";
import { getVisibleRanks } from "@/data/valorant";
import useOrderDataStore from "@/stores/order";
import { notFound, useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

const useRankPicker = (isDesiredRank: boolean) => {
  const { gameName } = useParams();
  const pathname = usePathname().split("/").pop();
  const { setOrderData, currentRank, desiredRank } = useOrderDataStore();
  const rankData = isDesiredRank ? desiredRank : currentRank;
  const visibleRanks = getVisibleRanks(pathname as string);
  const gameData = gamesData[gameName as keyof typeof gamesData];
  const visibleOptionsList =
    gameData.visibleOptions[pathname as keyof typeof gameData.visibleOptions];
  if (!gameData || !visibleRanks || !visibleRanks.length) return notFound();

  useEffect(() => {
    setOrderData({
      currentRank: gameData.ranks[3],
      desiredRank: gameData.ranks[5],
    });
  }, [gameName]);

  useEffect(() => {
    if (gameData.ranks.indexOf(currentRank) === 7) {
      setOrderData({
        desiredRank: gameData.ranks[7],
      });
    } else if (
      gameData.ranks.indexOf(currentRank) > gameData.ranks.indexOf(desiredRank)
    ) {
      setOrderData({
        desiredRank: gameData.ranks[gameData.ranks.indexOf(currentRank) + 1],
      });
    }
  }, [currentRank]);

  return { rankData, visibleRanks, gameData, visibleOptionsList };
};

export default useRankPicker;
