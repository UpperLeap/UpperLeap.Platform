import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useCalculate from "./useCalculate";
import useOrderDataStore, { initialOrderState } from "@/stores/order";

export type Detail = {
  name: string;
  label: string;
  chip: string | null;
  value: number | string;
};

const usePaymentDetails = () => {
  const t = useTranslations();
  const router = useRouter();
  const { isPending, priceData, orderPayload } = useCalculate();
  const orderData = useOrderDataStore();

  useEffect(() => {
    const isOrderDataInitial = Object.keys(initialOrderState).every(
      (key) =>
        orderData[key as keyof typeof orderData] ===
        initialOrderState[key as keyof typeof initialOrderState],
    );

    if (isOrderDataInitial) {
      router.push("/");
    }
  }, [orderData]);

  const details: Detail[] = [
    {
      name: t("checkout.subtotal"),
      chip: null,
      label: "$",
      value: priceData?.subtotal,
    },
    priceData?.couponCode && {
      name: t("checkout.discount"),
      label: "-%",
      chip: priceData?.couponCode,
      value:
        priceData?.subtotal &&
        (100 -(priceData?.subtotal / priceData?.priceBeforeDiscount) * 100).toFixed(0),
    },
    {
      name: t("checkout.processorFee"),
      label: "%",
      chip: null,
      value: orderData.paymentMethod === 0 ? "5" : "3.9",
    },
  ].filter(Boolean) as Detail[];

  return { details, isPending, priceData, orderPayload, orderData };
};

export default usePaymentDetails;
