import { getSession } from "@/utils/auth";
import DashboardHeader from "../components/DashboardHeader";
import { redirect } from "next/navigation";
import { getBoostingOrders } from "@/services/orders";
import RequestError from "@/components/shared/RequestError";
import { OrdersResponse } from "@/types/order";
import Orders from "./components/Orders";

export default async function ClaimOrdersPage() {
  const session = await getSession();
  const orders: OrdersResponse | null = await getBoostingOrders();

  if (
    !session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster")
  ) {
    redirect("/dashboard/orders");
  }

  if (!orders) return <RequestError />;

  return (
    <>
      <DashboardHeader page="claimOrders" />
      <div className="flex flex-col gap-6">
        <Orders initialOrders={orders} />
      </div>
    </>
  );
}
