import DashboardHeader from "../components/DashboardHeader";
import StoreCredit from "./components/StoreCredit";
import { Wallet } from "@/types/wallet";
import { getWalletData } from "@/services/wallet";
import RequestError from "@/components/shared/RequestError";
import TransactionsTableHeader from "./components/TransactionsTableHeader";
import Transactions from "./components/Transactions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions",
  description: "Transactions page",
};

export default async function TransactionsPage() {
  let walletData: Wallet | undefined;

  try {
    walletData = await getWalletData();
  } catch (error) {
    console.error(error);
    return <RequestError />;
  }

  if (walletData) {
    return (
      <>
        <DashboardHeader page="transactions" />
        <div className="grid grid-cols-7 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
          <div className="col-span-2">
            <StoreCredit balance={walletData?.balance} />
          </div>
          <div className="col-span-5 flex flex-col gap-5">
            <TransactionsTableHeader />
            <Transactions walletData={walletData} />
          </div>
        </div>
      </>
    );
  }
}
