import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoRocket } from "react-icons/io5";

const CompletePayment = ({ paymentUrl }: { paymentUrl: string }) => {
  const t = useTranslations();

  return (
    <Link
      href={paymentUrl}
      className="bg-secondary px-4 py-2 text-sm rounded-md text-white font-semibold flex items-center gap-1 hover:opacity-90 duration-300 active:scale-90"
    >
      <span className="text-base">
        <IoRocket />
      </span>
      <span>{t("orders.completePayment")}</span>
    </Link>
  );
};

export default CompletePayment;
