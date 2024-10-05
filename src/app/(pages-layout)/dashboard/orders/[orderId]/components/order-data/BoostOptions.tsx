import { getBoostOptions } from "@/data/valorant";
import { Order } from "@/types/order";
import { useTranslations } from "next-intl";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const BoostOptions = ({ order }: { order: Order }) => {
  const t = useTranslations();
  const boostOptions = getBoostOptions(order);

  if (boostOptions.length === 0) return null;

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <h2 className="text-foreground font-semibold py-3 px-5 border-b-1 border-foreground-secondary/20">
        {t("orders.boostOptions")}
      </h2>
      <div className="px-5 ">
        {boostOptions.map((option, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-b-1 border-foreground-secondary/20 last:border-none py-5"
          >
            <p className="text-foreground font-medium text-sm">
              {t(`orders.${option.title}`)}
            </p>
            <div className="text-foreground-secondary">
              {typeof option.value === "boolean" ? (
                <div className="flex items-center gap-1 text-sm text-green-500">
                  <span className="text-lg">
                    <IoCheckmarkCircleSharp />
                  </span>
                  <span>{t("orders.yes")}</span>
                </div>
              ) : (
                option.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoostOptions;
