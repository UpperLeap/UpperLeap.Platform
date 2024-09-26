"use client";

import { Input } from "@/components/ui/Input";
import { PriceData } from "@/hooks/orders/useCalculate";
import useOrderDataStore from "@/stores/order";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Discount = ({
  priceData,
  isPending,
}: {
  priceData: PriceData | null;
  isPending: boolean;
}) => {
  const t = useTranslations();
  const { setOrderData } = useOrderDataStore();
  const [discountCode, setDiscountCode] = useState("");
  const discountPercentage = useMemo(() => {
    if (!priceData) return 0;
    return Math.round(
      100 - (priceData.subtotal * 100) / priceData.priceBeforeDiscount,
    );
  }, [priceData]);

  const handleApplyDiscount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!discountCode) return;
    setOrderData({
      discountCode,
    });
  };

  return (
    <div className="my-7 px-5">
      {!priceData?.couponCode && (
        <form
          className="flex items-center gap-2"
          onSubmit={handleApplyDiscount}
          style={{
            opacity: isPending ? 0.5 : 1,
          }}
        >
          <Input
            type="text"
            placeholder={t("gameProfile.discountCode")}
            value={discountCode}
            disabled={isPending}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button className="px-4 py-2 bg-default/50 hover:bg-default/70 duration-300 active:scale-90   text-foreground rounded-md text-sm">
            {t("common.apply")}
          </button>
        </form>
      )}
      {priceData?.couponCode && (
        <div className="bg-green-500/20 relative font-semibold border-1 border-green-500/70 text-green-500 p-2 rounded-md text-center flex items-center justify-center">
          <p className="px-5 max-w-sm">
            {t("gameProfile.discountCodeApplied", {
              discount: discountPercentage,
              code: priceData?.couponCode,
            })}
          </p>
          <button
            onClick={() => {
              setOrderData({ discountCode: "" });
              setDiscountCode("");
            }}
            className="absolute top-1/2 right-2 -translate-y-1/2 hover:bg-green-800/20 duration-300 p-1 rounded-full"
          >
            <RxCross2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default Discount;
