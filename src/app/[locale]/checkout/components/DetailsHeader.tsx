import { OrderPayload, PriceData } from "@/hooks/orders/useCalculate";
import useOrderDataStore, { OrderDataStore } from "@/stores/order";
import { BoostingType } from "@/types/game";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const DetailsHeader = ({
  priceData,
  orderPayload,
}: {
  priceData: PriceData | null;
  orderPayload: OrderPayload;
}) => {
  const t = useTranslations();
  const orderData = useOrderDataStore();

  return (
    <>
      {" "}
      <h3 className="text-3xl font-bold text-foreground mt-2">
        ${priceData?.total}
      </h3>
      <div className="flex items-center justify-between py-7">
        <div className="flex items-center gap-2">
          {orderData.game && (
            <Image
              src={orderData?.game?.imageUrl}
              alt={orderData?.game?.name}
              width={48}
              height={48}
              className="object-cover w-12 h-12 rounded-lg"
            />
          )}
          <div>
            <p className="text-foreground font-semibold capitalize">
              {orderData.game?.name?.toLocaleLowerCase()}
            </p>
            <p className="text-foreground/50 text-sm capitalize">
              {t(
                `checkout.boostingType.${BoostingType[orderPayload?.boostingDetails?.type]}`,
              )}
            </p>
          </div>
        </div>
        <p className="text-foreground font-semibold">${priceData?.subtotal}</p>
      </div>
    </>
  );
};

export default DetailsHeader;
