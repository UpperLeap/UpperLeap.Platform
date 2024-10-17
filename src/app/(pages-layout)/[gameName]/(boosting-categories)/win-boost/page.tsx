import { Metadata } from "next";
import Checkout from "../components/checkout/Checkout";
import MatchesAmount from "../components/MatchesAmount";
import RankPicker from "../components/RankPicker";

export function generateMetadata({
  params: { gameName },
}: {
  params: { gameName: string };
}): Metadata {
  const gameNameCapitalized =
    gameName.charAt(0).toUpperCase() + gameName.slice(1);
  return {
    title: `${gameNameCapitalized} Win Boost Service`,
    description: `Win Boost Service for ${gameNameCapitalized}`,
  };
}

export default function WinBoostPage() {
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
