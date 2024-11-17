import RequestError from "@/components/shared/RequestError";
import { getWithdrawals } from "@/services/wallet";
import { getSession } from "@/utils/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import WithdrawalsTable from "./components/WithdrawalsTable";
import Placeholder from "@/components/shared/Placeholder";
import { GiTakeMyMoney } from "react-icons/gi";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Withdrawals",
  description: "Withdrawals page",
};

export default async function WithdrawalsPage() {
  const t = await getTranslations();
  const session = await getSession();
  const isBooster =
    session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster");
  if (!isBooster) return redirect("/dashboard/wallet/transactions");

  const withdrawals = await getWithdrawals();

  if (!withdrawals) return <RequestError />;

  if (withdrawals.length === 0)
    return (
      <div className="mt-5">
        <Placeholder
          icon={<GiTakeMyMoney />}
          title={t("transactions.noWithdrawals")}
          description={t("transactions.noWithdrawalsDescription")}
        />
      </div>
    );

  return <WithdrawalsTable withdrawals={withdrawals} />;
}
