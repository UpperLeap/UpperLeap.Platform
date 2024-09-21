import NumberTicker from "@/components/ui/number-ticker";
import { PriceData } from "@/hooks/orders/useCalculate";
import { useTranslations } from "next-intl";
import React from "react";

const Price = ({ priceData }: { priceData: PriceData | null }) => {
  const t = useTranslations();

  return (
    <div className="flex items-end justify-between gap-6">
      <p>{t("gameProfile.totalPrice")}</p>
      <div className="relative">
        <span className="text-3xl text-foreground font-semibold">$</span>
        <NumberTicker
          className="font-bold text-4xl text-center bg-gradient-to-r from-foreground dark:from-[#C0C0C0] via-foreground dark:via-foreground dark:to-[#C0C0C0] to-foreground inline-block text-transparent bg-clip-text"
          value={priceData?.subtotal || 0.0}
        />
        {priceData?.subtotal !== priceData?.priceBeforeDiscount && (
          <del className=" text-warning-500 absolute bottom-0 -left-9">
            ${priceData?.priceBeforeDiscount}
          </del>
        )}
      </div>
    </div>
  );
};

export default Price;
