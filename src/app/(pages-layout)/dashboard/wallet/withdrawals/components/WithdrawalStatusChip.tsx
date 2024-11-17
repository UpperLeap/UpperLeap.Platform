import { useTranslations } from "next-intl";
import React from "react";

const WithdrawalStatusChip = ({
  isCompleted,
  isRejected,
}: {
  isCompleted: boolean;
  isRejected: boolean;
}) => {
  const t = useTranslations();

  if (isCompleted) {
    return (
      <div className="text-green-700 dark:text-green-400 bg-green-400/20 text-xs px-2 py-1 rounded-md w-fit">
        {t("transactions.completed")}
      </div>
    );
  }

  if (isRejected) {
    return (
      <div className="text-red-700 dark:text-red-400 bg-red-400/20 text-xs px-2 py-1 rounded-md w-fit">
        {t("transactions.rejected")}
      </div>
    );
  }

  return (
    <div className="text-gray-700 dark:text-gray-400 bg-gray-400/20 text-xs px-2 py-1 rounded-md w-fit">
      {t("transactions.pending")}
    </div>
  );
};

export default WithdrawalStatusChip;
