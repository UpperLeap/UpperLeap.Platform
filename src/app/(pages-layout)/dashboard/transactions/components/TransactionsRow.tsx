import { languagesPrefixes } from "@/i18n/config";
import { Transaction } from "@/types/wallet";
import { cn, formatDate } from "@/utils/utils";
import { useTranslations } from "next-intl";

const TransactionsRow = ({ transaction }: { transaction: Transaction }) => {
  const t = useTranslations();

  return (
    <tr className="border-b-1 border-foreground-secondary/10 flex w-full min-w-fit items-center py-3 last:border-b-0 text-sm">
      <td className="ellipsis w-[100px] flex-grow px-4">Lemon</td>
      <td className="ellipsis w-[150px] flex-grow px-4">
        #{transaction?.id?.slice(0, 12)}
      </td>
      <td className="ellipsis w-[100px] flex-grow px-4">
        <div
          className={cn(
            "text-xs px-2 py-1 rounded-md w-fit",
            transaction?.completed
              ? "text-green-700 dark:text-green-400 bg-green-400/20"
              : "text-gray-700 dark:text-gray-400 bg-gray-400/20",
          )}
        >
          {transaction?.completed
            ? t("dashboard.completed")
            : t("dashboard.pending")}
        </div>
      </td>
      <td className="ellipsis w-[120px] flex-grow px-4">
        {transaction?.service}
      </td>
      <td className="ellipsis w-[150px] flex-grow px-4">
        #{transaction?.orderId?.slice(0, 12)}
      </td>
      <td className="ellipsis w-[100px] flex-grow px-4">
        ${transaction?.amount}
      </td>
      <td className="ellipsis w-[150px] flex-grow px-4 text-center flex items-center justify-center">
        {formatDate(
          transaction.updatedDate,
          languagesPrefixes["en-US" as keyof typeof languagesPrefixes],
        )}
      </td>
    </tr>
  );
};

export default TransactionsRow;
