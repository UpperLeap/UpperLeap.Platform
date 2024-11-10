import { Order } from "@/types/order";
import React from "react";
import CompletePayment from "./order-actions/CompletePayment";
import { getSession } from "@/utils/auth";
import EditOrder from "./order-actions/EditOrder";
import CompleteOrderModal from "./order-actions/CompleteOrderModal";
import ReportOrderModal from "./order-actions/ReportOrderModal";
// import CancelOrderModal from "./CancelOrderModal";

const OrderActions = async ({ order }: { order: Order }) => {
  const session = await getSession();
  const isOrderOwner = session?.nameid === order?.userId;
  const isOrderBooster = session?.nameid === order?.boostingDetails?.boosterId;

  return (
    <div className="flex items-center gap-2">
      {isOrderBooster && <CompleteOrderModal order={order} />}
      {!order?.transaction?.completed && isOrderOwner && !order.completed && (
        <CompletePayment paymentUrl={order?.paymentUrl} />
      )}
      {isOrderOwner && !order.completed && (
        <EditOrder orderVpn={order?.boostingDetails?.vpnCountry} />
      )}
      {isOrderOwner && <ReportOrderModal order={order} />}
      {/* {isOrderOwner && <CancelOrderModal order={order} />} */}
    </div>
  );
};

export default OrderActions;
