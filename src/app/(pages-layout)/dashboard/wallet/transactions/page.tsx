import { Wallet } from "@/types/wallet";
import TransactionsTableHeader from "./components/TransactionsTableHeader";
import Transactions from "./components/Transactions";
import { Metadata } from "next";
import { getWalletData } from "@/services/wallet";
import RequestError from "@/components/shared/RequestError";

export const metadata: Metadata = {
  title: "Transactions History",
  description: "Transactions history page",
};

export default async function TransactionsHistoryPage() {
  let walletData: Wallet | undefined;

  try {
    walletData = await getWalletData();
  } catch (error) {
    return <RequestError />;
  }

  if (walletData) {
    return (
      <>
        <TransactionsTableHeader />
        <Transactions walletData={walletData} />
      </>
    );
  }
}
