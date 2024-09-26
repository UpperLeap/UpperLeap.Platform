import Checkout from "../components/checkout/Checkout";
import RankPicker from "../components/RankPicker";

export default function RankBoostPage() {
  return (
    <div className="grid grid-cols-5 gap-5 medium:grid-cols-1 medium:gap-x-0">
      <div className="col-span-3 flex flex-col gap-5">
        <RankPicker key={"current"} />
        <RankPicker key={"desired"} isDesiredRank />
      </div>
      <div className="col-span-2">
        <Checkout />
      </div>
    </div>
  );
}
