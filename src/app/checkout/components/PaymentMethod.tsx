import User from "@/components/navbar/User";
import Logo from "@/components/shared/Logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import MethodOptions from "./MethodOptions";

const PaymentMethod = () => {
  const t = useTranslations();

  return (
    <div className="w-full max-w-lg mobile:max-w-full">
      <div className="flex items-center gap-5 justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <User />
      </div>
      <div className="mt-12">
        <h2>{t("checkout.paymentMethod")}</h2>
        <MethodOptions />
      </div>
    </div>
  );
};

export default PaymentMethod;
