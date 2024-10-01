import { Order } from "@/types/order";
import { useTranslations } from "next-intl";
import OrdersRow from "./OrdersRow";

const OrdersTable = ({ orders }: { orders: Order[] }) => {
  const t = useTranslations();

  return (
    <table className="border-1 border-foreground-secondary/20 block w-full max-w-full overflow-auto rounded-md">
      <thead className="border-b-1 border-foreground-secondary/20 block w-full min-w-max py-2 bg-background-secondary text-foreground text-sm font-bold uppercase">
        <tr className="flex w-full min-w-fit items-center">
          <td className="block w-[150px] flex-grow whitespace-nowrap px-4">
            {t("dashboard.order")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("dashboard.id")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("dashboard.price")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("dashboard.status")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("dashboard.lastUpdated")}
          </td>
          <td className="ellipsis w-[100px] flex-grow whitespace-nowrap px-4 text-center">
            {t("dashboard.action")}
          </td>
        </tr>
      </thead>
      <tbody className="block w-full bg-background-secondary/30">
        {orders?.map((order) => <OrdersRow key={order.id} order={order} />)}
      </tbody>
    </table>
  );
};

export default OrdersTable;
