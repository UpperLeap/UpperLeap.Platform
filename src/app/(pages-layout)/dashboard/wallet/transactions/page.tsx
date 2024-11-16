import { Wallet } from "@/types/wallet";
import TransactionsTableHeader from "../components/TransactionsTableHeader";
import Transactions from "../components/Transactions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transactions History",
  description: "Transactions history page",
};

export default function TransactionsHistoryPage({
  walletData,
}: {
  walletData: Wallet;
}) {
  return (
    <>
      <TransactionsTableHeader />
      <Transactions walletData={walletData} />
    </>
  );
}
