import React from "react";
import RankPicker from "../components/RankPicker";
import MatchesAmount from "../components/MatchesAmount";
import Checkout from "../components/checkout/Checkout";

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
