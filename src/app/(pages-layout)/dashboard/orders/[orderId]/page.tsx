import RequestError from "@/components/shared/RequestError";
import { getOrderById } from "@/services/orders";
import { Order } from "@/types/order";
import React from "react";
import OrderHeader from "./components/OrderHeader";
import OrderActions from "./components/OrderActions";
import BoostData from "./components/order-data/BoostData";
import BoostOptions from "./components/order-data/BoostOptions";
import BoostInformation from "./components/order-data/BoostInformation";
import BoosterDetails from "./components/order-data/BoosterDetails";
import OrderCredentialsCard from "./components/order-data/OrderCredentialsCard";

export default async function OrderPage({
  params: { orderId },
}: {
  params: { orderId: string };
}) {
  let order: Order | undefined;

  try {
    order = await getOrderById(orderId);
  } catch (error) {
    console.error(error);
    return <RequestError />;
  }

  // console.log(order);

  if (order) {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between mobile:flex-col mobile:gap-5">
          <OrderHeader order={order} />
          <OrderActions order={order} />
        </div>
        <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
          <div className="col-span-2 flex flex-col gap-5">
            <BoostData order={order} />
            <BoostOptions order={order} />
            <BoostInformation order={order} />
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <BoosterDetails boosterData={order?.boostingDetails?.booster} />
            <OrderCredentialsCard />
          </div>
        </div>
      </div>
    );
  }
}
