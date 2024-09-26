"use client";

import useOrderDataStore from "@/stores/order";
import { BasicGame } from "@/types/game";
import { useEffect } from "react";

const GameData = ({ game }: { game: BasicGame }) => {
  const { setOrderData } = useOrderDataStore();

  useEffect(() => {
    setOrderData({ game });
  }, [game]);
  return null;
};

export default GameData;
