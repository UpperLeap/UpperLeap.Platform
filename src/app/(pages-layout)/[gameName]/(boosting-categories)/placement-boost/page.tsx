import React from "react";
import RankPicker from "../components/RankPicker";
import MatchesAmount from "../components/MatchesAmount";
import Checkout from "../components/checkout/Checkout";
import { Metadata } from "next";

export function generateMetadata({
  params: { gameName },
}: {
  params: { gameName: string };
}): Metadata {
  const gameNameCapitalized =
    gameName.charAt(0).toUpperCase() + gameName.slice(1);
  return {
    title: `${gameNameCapitalized} Placement Boost Service`,
    description: `Placement Boost Service for ${gameNameCapitalized}`,
  };
}

export default function PlacementBoostPage() {
  return (
    <div className="grid grid-cols-5 gap-5 medium:grid-cols-1 medium:gap-x-0">
      <div className="col-span-3 flex flex-col gap-5">
        <RankPicker key={"current"} />
        <MatchesAmount />
      </div>
      <div className="col-span-2">
        <Checkout />
      </div>
    </div>
  );
}
