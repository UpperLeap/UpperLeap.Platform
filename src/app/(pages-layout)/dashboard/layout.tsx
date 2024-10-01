import { getIsLoggedIn } from "@/utils/auth";
import DashboardNav from "./components/DashboardNav";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = await getIsLoggedIn();

  if (!isLoggedIn) {
    redirect("/");
  }

  return (
    <>
      <DashboardNav />
      <div className="z-[1] relative max-w-wide mx-auto px-10 py-10 mobile:px-5 flex flex-col gap-14 min-h-[60vh]">
        {children}
      </div>
    </>
  );
}
