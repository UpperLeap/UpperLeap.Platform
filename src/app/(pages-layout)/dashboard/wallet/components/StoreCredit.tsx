import WithdrawModal from "./WithdrawModal";
import { getSession } from "@/utils/auth";
import { getTranslations } from "next-intl/server";

const StoreCredit = async ({ balance }: { balance: number }) => {
  const t = await getTranslations();
  const session = await getSession();
  const isBooster =
    session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster");

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <div className="p-5">
        <h2 className="font-bold text-sm mb-2">
          {t("transactions.storeCredit")}
        </h2>
        <p className="font-bold text-4xl text-center bg-gradient-to-r from-foreground dark:from-[#C0C0C0] via-foreground dark:via-foreground dark:to-[#C0C0C0] to-foreground inline-block text-transparent bg-clip-text">
          <span>${balance.toFixed(2)}</span>
          <span className="text-xs"> USD</span>
        </p>
      </div>
      {isBooster && (
        <div className="border-t-1 border-foreground-secondary/10 px-5 py-2">
          <WithdrawModal balance={balance} />
        </div>
      )}
    </div>
  );
};

export default StoreCredit;
