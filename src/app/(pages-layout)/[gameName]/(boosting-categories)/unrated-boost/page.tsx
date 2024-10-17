import { Metadata } from "next";
import Checkout from "../components/checkout/Checkout";
import MatchesAmount from "../components/MatchesAmount";

export function generateMetadata({
  params: { gameName },
}: {
  params: { gameName: string };
}): Metadata {
  const gameNameCapitalized =
    gameName.charAt(0).toUpperCase() + gameName.slice(1);
  return {
    title: `${gameNameCapitalized} Unrated Boost Service`,
    description: `Unrated Boost Service for ${gameNameCapitalized}`,
  };
}

export default function UnratedBoostPage() {
  return (
    <div className="grid grid-cols-5 gap-5 medium:grid-cols-1 medium:gap-x-0">
      <div className="col-span-3 flex flex-col gap-5">
        <MatchesAmount />
      </div>
      <div className="col-span-2">
        <Checkout />
      </div>
    </div>
  );
}
