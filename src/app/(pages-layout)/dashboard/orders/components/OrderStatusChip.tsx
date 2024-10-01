import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import React from "react";

const OrderStatusChip = ({
  isCompleted,
  hasBooster,
}: {
  isCompleted: boolean;
  hasBooster: boolean;
}) => {
  const t = useTranslations();
  const orderStatus = getOrderStatus();
  function getOrderStatus() {
    if (isCompleted) {
      return {
        status: t("dashboard.completed"),
        color: "text-green-700 dark:text-green-400 bg-green-400/20",
      };
    }
    if (!isCompleted && hasBooster) {
      return {
        status: t("dashboard.inProgress"),
        color: "text-yellow-700 dark:text-yellow-400 bg-yellow-400/20",
      };
    }
    return {
      status: t("dashboard.pending"),
      color: "text-gray-700 dark:text-gray-400 bg-gray-400/20",
    };
  }

  return (
    <div className={cn("px-2 py-1 text-xs rounded-md w-fit", orderStatus.color)}>
      {orderStatus.status}
    </div>
  );
};

export default OrderStatusChip;
