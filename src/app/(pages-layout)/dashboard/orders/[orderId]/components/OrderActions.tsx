import { Order } from "@/types/order";
import React from "react";
import CompletePayment from "./order-actions/CompletePayment";
import { getSession } from "@/utils/auth";
import EditOrder from "./order-actions/EditOrder";
import CompleteOrder from "./order-actions/CompleteOrder";
// import CancelOrderModal from "./CancelOrderModal";

const OrderActions = async ({ order }: { order: Order }) => {
  const session = await getSession();
  const isOrderOwner = session?.nameid === order?.userId;
  const isOrderBooster = session?.nameid === order?.boostingDetails?.boosterId;

  return (
    <div className="flex items-center gap-2">
      {isOrderBooster && <CompleteOrder />}
      {!order?.transaction?.completed && isOrderOwner && (
        <CompletePayment paymentUrl={order?.paymentUrl} />
      )}
      {isOrderOwner && (
        <EditOrder orderVpn={order?.boostingDetails?.vpnCountry} />
      )}
      {/* {isOrderOwner && <CancelOrderModal order={order} />} */}
    </div>
  );
};

export default OrderActions;
