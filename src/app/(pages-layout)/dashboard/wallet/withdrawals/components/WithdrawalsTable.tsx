import { Withdrawal } from "@/types/wallet";
import { useTranslations } from "next-intl";
import React from "react";
import WithdrawalsRow from "./WithdrawalsRow";

const WithdrawalsTable = ({ withdrawals }: { withdrawals: Withdrawal[] }) => {
  const t = useTranslations();

  return (
    <table className="border-1 border-foreground-secondary/20 block w-full max-w-full overflow-auto rounded-md">
      <thead className="border-b-1 border-foreground-secondary/20 block w-full min-w-max py-2 bg-background-secondary text-foreground text-sm font-semibold uppercase">
        <tr className="flex w-full min-w-fit items-center">
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("transactions.id")}
          </td>
          <td className="ellipsis w-[100px] flex-grow whitespace-nowrap px-4">
            {t("transactions.amount")}
          </td>
          <td className="ellipsis w-[100px] flex-grow whitespace-nowrap px-4">
            {t("transactions.status")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("transactions.lastUpdated")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("transactions.action")}
          </td>
        </tr>
      </thead>
      <tbody className="block w-full bg-background-secondary/30">
        {withdrawals?.map((withdrawal) => (
          <WithdrawalsRow key={withdrawal.id} withdrawal={withdrawal} />
        ))}
      </tbody>
    </table>
  );
};

export default WithdrawalsTable;
