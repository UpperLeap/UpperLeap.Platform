import { getUser } from "@/services/user";
import { User } from "@/types/user";
import DashboardHeader from "../components/DashboardHeader";
import StoreCredit from "../transactions/components/StoreCredit";
import UserInformation from "./components/UserInformation";
import DeleteAccount from "./components/DeleteAccount";

export default async function SettingsPage() {
  let user: User | undefined;

  try {
    user = await getUser();
  } catch (error) {
    console.log(error);
  }

  console.log(user);

  if (user) {
    return (
      <>
        <DashboardHeader page="settings" />
        <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
          <div className="col-span-2 flex flex-col gap-5">
            <UserInformation user={user} />
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
