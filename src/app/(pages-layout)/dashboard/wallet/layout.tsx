import RequestError from "@/components/shared/RequestError";
import { getWalletData } from "@/services/wallet";
import { Wallet } from "@/types/wallet";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import StoreCredit from "./components/StoreCredit";
import WalletTabs from "./components/WalletTabs";

export default async function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let walletData: Wallet | undefined;

  try {
    walletData = await getWalletData();
  } catch (error) {
    return <RequestError />;
  }

  if (walletData) {
    return (
      <>
        <DashboardHeader page="wallet" />
        <div className="grid grid-cols-7 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
          <div className="col-span-2">
            <StoreCredit balance={walletData?.balance} />
          </div>
          <div className="col-span-5 flex flex-col gap-5">
            <WalletTabs />
            {children}
          </div>
        </div>
      </>
    );
  }
}
