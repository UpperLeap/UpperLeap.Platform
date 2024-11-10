import RequestError from "@/components/shared/RequestError";
import { getOrderById } from "@/services/orders";
import { Order } from "@/types/order";
import React, { Suspense } from "react";
import OrderHeader from "./components/OrderHeader";
import OrderActions from "./components/OrderActions";
import BoostData from "./components/order-data/BoostData";
import BoostOptions from "./components/order-data/BoostOptions";
import BoostInformation from "./components/order-data/BoostInformation";
import BoosterDetails from "./components/order-data/BoosterDetails";
import OrderCredentialsCard from "./components/order-data/OrderCredentialsCard";
import { getSession } from "@/utils/auth";
import ChatHub from "./components/order-chat/ChatHub";

export default async function OrderPage({
  params: { orderId },
}: {
  params: { orderId: string };
}) {
  const session = await getSession();
  let order: Order | undefined;

  try {
    order = await getOrderById(orderId);
  } catch (error) {
    return <RequestError />;
  }

  // console.log(order);

  if (order && order?.boostingDetails) {
    const isOrderOwner = session?.nameid === order?.userId;
    const isOrderBooster =
      session?.nameid === order?.boostingDetails?.boosterId;
    const isChatVisible =
      (isOrderOwner || isOrderBooster) && order.transaction.completed;

    return (
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between mobile:flex-col mobile:gap-5">
          <OrderHeader order={order} />
          <OrderActions order={order} />
        </div>
        <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
          <div className="col-span-2 flex flex-col gap-5">
            {isChatVisible && <ChatHub orderId={orderId} isOrderCompleted={order.completed} />}
            <BoostData order={order} />
            <BoostOptions order={order} />
            <BoostInformation order={order} />
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <BoosterDetails
              boosterData={order?.boostingDetails?.booster}
              isPaid={order.transaction.completed}
            />
            {(isOrderOwner || isOrderBooster) && <OrderCredentialsCard />}
          </div>
        </div>
      </div>
    );
  } else {
    return <RequestError />;
  }
}
