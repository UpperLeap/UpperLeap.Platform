import { Transaction } from "@/types/wallet";
import { useTranslations } from "next-intl";
import TransactionsRow from "./TransactionsRow";

const TransactionsTable = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const t = useTranslations();

  return (
    <table className="border-1 border-foreground-secondary/20 block w-full max-w-full overflow-auto rounded-md">
      <thead className="border-b-1 border-foreground-secondary/20 block w-full min-w-max py-2 bg-background-secondary text-foreground text-sm font-semibold uppercase">
        <tr className="flex w-full min-w-fit items-center">
          <td className="block w-[100px] flex-grow whitespace-nowrap px-4">
            {t("transactions.paymentMethod")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("transactions.id")}
          </td>
          <td className="ellipsis w-[100px] flex-grow whitespace-nowrap px-4">
            {t("transactions.status")}
          </td>
          <td className="ellipsis w-[120px] flex-grow whitespace-nowrap px-4">
            {t("transactions.service")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4">
            {t("transactions.orderId")}
          </td>
          <td className="ellipsis w-[100px] flex-grow whitespace-nowrap px-4">
            {t("transactions.price")}
          </td>
          <td className="ellipsis w-[150px] flex-grow whitespace-nowrap px-4 text-center">
            {t("transactions.lastUpdated")}
          </td>
        </tr>
      </thead>
      <tbody className="block w-full bg-background-secondary/30">
        {transactions?.map((transaction) => (
          <TransactionsRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
