import DashboardHeader from "../components/DashboardHeader";
import TableFilters from "./components/TableFilters";
import Orders from "./components/Orders";
// import { OrdersResponse } from "@/types/order";
// import { getOrders } from "@/services/orders";

export default async function OrdersPage() {
  // let orders: OrdersResponse | undefined;

  // try {
  //   orders = await getOrders();
  // } catch (error) {
  //   return null;
  // }
  

  return (
    <>
      <DashboardHeader page="orders" />
      <div className="flex flex-col gap-6">
        <TableFilters />
        <Orders />
      </div>
    </>
  );
}
