import useOrderDataStore from "@/stores/order";
import { useEffect, useMemo, useState } from "react";
import { useAction } from "../api/useAction";
import { usePathname } from "next/navigation";
import { BoostingType } from "@/types/game";

export type PriceData = {
  total: number;
  subtotal: number;
  platformFees: number;
  priceBeforeDiscount: number;
  couponCode: string;
};

const useCalculate = () => {
  const orderData = useOrderDataStore();
  const pathname = usePathname().split("/").pop();
  const [priceData, setPriceData] = useState<PriceData | null>(null);

  const orderPayload = useMemo(() => {
    return {
      currency: "usd",
      method: orderData.paymentMethod,
      boostingDetails: {
        gameId: orderData.game?.id,
        region: orderData.server,
        configuration: {
          ...orderData.configuration,
          code: orderData.discountCode,
        },
        type: orderData.boostingType,
        currentRating: orderData.currentPoints,
        currentRank: orderData.currentRank?.title,
        desiredRank: orderData.desiredRank?.title,
        currentDivision: orderData.currentDivision,
        desiredDivision: orderData.desiredDivision,
        desiredRating: 0,
        winAmount: orderData.winAmount,
        valorantAgents: orderData.agents,
        mode: orderData.gameMode,
      },
    };
  }, [orderData]);

  const { mutate, isPending, ...actions } = useAction({
    endpoint: "/orders/calculate",
    method: "POST",
    mutationOptions: {
      onSuccess: (data: PriceData) => {
        setPriceData(data);
      },
    },
  });

  useEffect(() => {
    if (!orderData?.game) return;
    if (
      pathname === "unrated-boost" &&
      orderPayload?.boostingDetails.type === BoostingType["unrated-boost"]
    ) {
      mutate(orderPayload);
    }
    if (!orderPayload?.boostingDetails?.currentRank) return;

    mutate(orderPayload);
  }, [mutate, orderPayload]);

  return { ...actions, isPending, priceData, orderPayload };
};

export default useCalculate;

export type OrderPayload = ReturnType<typeof useCalculate>["orderPayload"];
