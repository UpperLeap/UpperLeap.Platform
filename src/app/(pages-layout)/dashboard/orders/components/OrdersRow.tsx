import { languagesPrefixes } from "@/i18n/config";
import { Order } from "@/types/order";
import { formatDate } from "@/utils/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import OrderStatusChip from "./OrderStatusChip";

const OrdersRow = ({
  order,
  isBooster,
}: {
  order: Order;
  isBooster: boolean;
}) => {
  const t = useTranslations();

  return (
    <tr className="border-b-1 border-foreground-secondary/10 flex w-full min-w-fit items-center py-3 last:border-b-0 text-sm">
      <td className="ellipsis w-[150px] flex-grow px-4 text-foreground">
        <Link
          className="flex items-center gap-2"
          href={`/dashboard/orders/${order.id}`}
        >
          <Image
            // src={order?.boostingDetails?.game?.iconUrl}
            src="https://cdn.gameboost.com/games/logos/valorant.png"
            alt={order?.name}
            width={35}
            height={35}
            className="object-cover"
          />
          <p>{order?.name}</p>
        </Link>
      </td>
      <td className="ellipsis w-[150px] flex-grow px-4">
        #{order?.id.slice(0, 7)}
      </td>
      <td className="ellipsis w-[150px] flex-grow px-4 text-foreground">
        ${order?.price?.total}
      </td>
      <td className="ellipsis w-[150px] flex-grow px-4">
        <OrderStatusChip
          isCompleted={order.completed}
          hasBooster={!!order?.boostingDetails?.booster}
        />
      </td>
      <td className="ellipsis w-[150px] flex-grow px-4">
        {formatDate(
          order.updatedDate,
          languagesPrefixes["en-US" as keyof typeof languagesPrefixes],
        )}
        {/* {`${timeCounter(order.updatedDate).amount} ${t(`common.timeUnits.${timeCounter(order.updatedDate).duration}`)} ${t("common.ago")}`} */}
      </td>
      {!isBooster && (
        <td className="ellipsis w-[100px] flex-grow px-4 text-center flex items-center justify-center">
          {order.transaction.completed ? (
            <Link
              className="flex items-center gap-2 bg-default-200 dark:bg-default-100 px-2 py-1.5 rounded-md text-sm hover:opacity-80 active:scale-90 select-none duration-300"
              href={`/dashboard/orders/${order.id}`}
            >
              <span>{t("dashboard.view")}</span>
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          ) : (
            <a
              className="flex items-center gap-2 text-green-700 dark:text-green-400 bg-green-400/20 px-2 py-1.5 rounded-md text-sm hover:opacity-80 active:scale-90 select-none duration-300"
              href={order.paymentUrl}
            >
              <span>{t("dashboard.payNow")}</span>
              <span>
                <FaArrowRightLong />
              </span>
            </a>
          )}
        </td>
      )}
      {isBooster && (
        <td className="ellipsis w-[100px] flex-grow px-4 text-center flex items-center justify-center">
          <Link
            className="flex items-center gap-2 bg-default-200 dark:bg-default-100 px-2 py-1.5 rounded-md text-sm hover:opacity-80 active:scale-90 select-none duration-300"
            href={`/dashboard/orders/${order.id}`}
          >
            <span>{t("dashboard.view")}</span>
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </td>
      )}
    </tr>
  );
};

export default OrdersRow;
