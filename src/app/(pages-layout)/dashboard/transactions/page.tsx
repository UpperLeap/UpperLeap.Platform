import DashboardHeader from "../components/DashboardHeader";
import StoreCredit from "./components/StoreCredit";
import { Wallet } from "@/types/wallet";
import { getWalletData } from "@/services/wallet";
import RequestError from "@/components/shared/RequestError";
import TransactionsTableHeader from "./components/TransactionsTableHeader";
import Transactions from "./Transactions";

export default async function TransactionsPage() {
  let walletData: Wallet | undefined;

  try {
    walletData = await getWalletData();
  } catch (error) {
    console.error(error);
    return <RequestError />;
  }

  console.log(walletData);

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
