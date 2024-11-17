import RequestError from "@/components/shared/RequestError";
import { getWithdrawals } from "@/services/wallet";
import { getSession } from "@/utils/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Withdrawals",
  description: "Withdrawals page",
};

export default async function WithdrawalsPage() {
  const session = await getSession();
  const isBooster =
    session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster");
  if (!isBooster) return redirect("/dashboard/wallet/transactions");

  const withdrawals = await getWithdrawals();

  if (!withdrawals) return <RequestError />;

  console.log(withdrawals);

  return <div>Withdrawals</div>;
}
