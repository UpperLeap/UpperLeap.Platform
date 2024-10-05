import { Order } from "@/types/order";
import { useTranslations } from "next-intl";
import { getBoostInformation } from "@/data/valorant";
import AddToClipboard from "@/components/shared/AddToClipboard";
import OrderStatusChip from "../../../components/OrderStatusChip";

const BoostInformation = ({ order }: { order: Order }) => {
  const t = useTranslations();
  const boostInformation = getBoostInformation(order);

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <h2 className="text-foreground font-semibold py-3 px-5 border-b-1 border-foreground-secondary/20">
        {t("orders.boostInformation")}
      </h2>
      <div className="grid grid-cols-3 px-5 medium:grid-cols-2">
        {boostInformation.map((data) => (
          <div
            key={data.title}
            className="p-5 w-full max-w-[300px] flex-wrap border-b-1 border-foreground-secondary/10"
          >
            <p className="text-foreground font-medium">{t(data?.title)}</p>
            <p className="mt-2 text-sm capitalize">
              {data?.value?.toLowerCase()}
            </p>
          </div>
        ))}
        <div className="p-5 w-full max-w-[300px] flex-wrap border-b-1 border-foreground-secondary/10">
          <p className="text-foreground font-medium">{t("orders.boostId")}</p>
          <div className="flex items-center gap-1 mt-2 text-sm capitalize">
            <span>#{order.id.slice(0, 7)}</span>
            <AddToClipboard text={order.id} />
          </div>
        </div>
        <div className="p-5 w-full max-w-[300px] flex-wrap border-b-1 border-foreground-secondary/10">
          <p className="text-foreground font-medium">{t("dashboard.status")}</p>
          <div className="mt-2 text-sm capitalize">
            <OrderStatusChip
              isCompleted={order.completed}
              hasBooster={!!order.boostingDetails.booster}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostInformation;
