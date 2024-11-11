import PaymentMethod from "./components/PaymentMethod";
import PaymentDetails from "./components/PaymentDetails";
import { getIsLoggedIn, getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout page",
};

export default async function CheckoutPage() {
  const session = await getSession();
  const isBooster =
    session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster");

  if (!session || isBooster) {
    redirect("/");
  }

  return (
    <section className="flex min-h-screen items-center mobile:flex-col">
      <div className="h-screen bg-background w-[50vw] flex justify-end p-10 pt-16 pr-16 mobile:h-fit mobile:w-screen mobile:p-10">
        <PaymentMethod />
      </div>
      <div className="h-screen bg-background-secondary/70 w-[50vw] flex justify-start p-10 pt-16 pl-16 mobile:h-fit mobile:w-screen mobile:p-10">
        <PaymentDetails />
      </div>
    </section>
  );
}
