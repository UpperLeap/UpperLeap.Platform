import PaymentMethod from "./components/PaymentMethod";
import PaymentDetails from "./components/PaymentDetails";
import { getIsLoggedIn } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function CheckoutPage() {
  const isLoggedIn = await getIsLoggedIn();

  if (!isLoggedIn) {
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
