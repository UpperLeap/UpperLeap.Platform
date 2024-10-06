import { useTranslations } from "next-intl";

const StoreCredit = ({ balance }: { balance: number }) => {
  const t = useTranslations();

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg p-5">
      <h2 className="font-bold text-sm mb-2">
        {t("transactions.storeCredit")}
      </h2>
      <p className="font-bold text-4xl text-center bg-gradient-to-r from-foreground dark:from-[#C0C0C0] via-foreground dark:via-foreground dark:to-[#C0C0C0] to-foreground inline-block text-transparent bg-clip-text">
        <span>${balance.toFixed(2)}</span>
        <span className="text-xs"> USD</span>
      </p>
    </div>
  );
};

export default StoreCredit;
