import DashboardHeader from "../components/DashboardHeader";
import TableFilters from "./components/TableFilters";
import Orders from "./components/Orders";
import { OrdersResponse } from "@/types/order";
import { getOrders } from "@/services/orders";
import RequestError from "@/components/shared/RequestError";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
  description: "Order page",
};
export default async function OrdersPage() {
  let orders: OrdersResponse | undefined;

  try {
    orders = await getOrders();
  } catch (error) {
    return <RequestError />;
  }

  if (orders) {
    return (
      <>
        <DashboardHeader page="orders" />
        <div className="flex flex-col gap-6">
          <TableFilters />
          <Orders initialOrders={orders} />
        </div>
      </>
    );
  }
}
