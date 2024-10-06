import AddToClipboard from "@/components/shared/AddToClipboard";
import { Order } from "@/types/order";
import Image from "next/image";

const OrderHeader = ({ order }: { order: Order }) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={order?.boostingDetails?.game?.iconUrl}
        alt={order?.name}
        width={50}
        height={50}
        className="object-cover"
      />
      <div>
        <h1 className="text-xl font-semibold text-foreground">{order?.name}</h1>
        <div className="text-sm text-foreground-secondary flex items-center gap-1">
          <span>#{order?.id?.slice(0, 7)}</span>
          <AddToClipboard text={order?.id} />
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
