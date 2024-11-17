import RequestError from "@/components/shared/RequestError";
import { getWalletData } from "@/services/wallet";
import { Wallet } from "@/types/wallet";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import StoreCredit from "./components/StoreCredit";
import WalletTabs from "./components/WalletTabs";
import { getSession } from "@/utils/auth";

export default async function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const isBooster =
    session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster");
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
            <WalletTabs isBooster={isBooster ?? false} />
            {children}
          </div>
        </div>
      </>
    );
  }
}
