import { useTranslations } from "next-intl";
import { FaCheckCircle } from "react-icons/fa";

const CompleteOrder = () => {
  const t = useTranslations();

  return (
    <button className="bg-secondary px-4 py-2 text-sm rounded-md text-white font-semibold flex items-center gap-1 hover:opacity-90 duration-300 active:scale-90">
      <span className="text-base">
        <FaCheckCircle />
      </span>
      <span>{t("orders.completeOrder")}</span>
    </button>
  );
};

export default CompleteOrder;
