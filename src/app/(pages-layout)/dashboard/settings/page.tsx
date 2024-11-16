import { getUser } from "@/services/user";
import { User } from "@/types/user";
import DashboardHeader from "../components/DashboardHeader";
import StoreCredit from "../transactions/components/StoreCredit";
import UserInformation from "./components/UserInformation";
import DeleteAccount from "./components/DeleteAccount";
import RequestError from "@/components/shared/RequestError";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import BoosterLevel from "./components/BoosterLevel";
import { getSession } from "@/utils/auth";
const NotificationsBanner = dynamic(
  () => import("./components/NotificationsBanner"),
  {
    ssr: false,
    // loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
  },
);

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings page",
};

export default async function SettingsPage() {
  const session = await getSession();
  let user: User | undefined;

  try {
    user = await getUser();
  } catch (error) {
    return <RequestError />;
  }

  // console.log(user);

  if (user) {
    const isBooster =
      session?.[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ]?.includes("Booster");

    return (
      <>
        <DashboardHeader page="settings" />
        <NotificationsBanner />
        <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
          <div className="col-span-2 flex flex-col gap-5">
            <UserInformation user={user} />
            {isBooster && user?.boosterStats && (
              <BoosterLevel boosterStats={user.boosterStats} />
            )}
            <DeleteAccount user={user} />
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <StoreCredit balance={user?.wallet?.balance} />
          </div>
        </div>
      </>
    );
  }
}
