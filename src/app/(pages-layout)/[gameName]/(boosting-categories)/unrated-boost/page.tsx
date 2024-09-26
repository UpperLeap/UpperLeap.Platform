import Checkout from "../components/checkout/Checkout";
import MatchesAmount from "../components/MatchesAmount";

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
