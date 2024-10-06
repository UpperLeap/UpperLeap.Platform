import SortOrder from "../../orders/components/filters/SortOrder";
import { useTranslations } from "next-intl";

const TransactionsTableHeader = () => {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-between gap-2 flex-wrap">
      <h2 className="text-lg font-semibold text-foreground">
        {t("transactions.transactionsHistory")}
      </h2>
      <SortOrder />
    </div>
  );
};

export default TransactionsTableHeader;
