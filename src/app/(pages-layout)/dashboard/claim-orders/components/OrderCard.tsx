import React from "react";
import { Order, Region } from "@/types/order";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BoostingType } from "@/types/order";
import ClaimOrderModal from "./ClaimOrderModal";

const OrderCard = ({ order }: { order: Order }) => {
  const t = useTranslations();

  return (
    <div className="bg-background-secondary/70 border-2 border-foreground-secondary/10 rounded-lg ">
      <div className="p-4 flex justify-between items-center border-b-2 border-foreground-secondary/10">
        <div className="flex items-center gap-2">
          <Image
            src={
              order?.boostingDetails?.game?.iconUrl ||
              "https://cdn.gameboost.com/games/logos/valorant.png"
            }
            alt={order?.boostingDetails?.game?.name}
            width={50}
            height={50}
            className="object-cover rounded-xl w-11 h-11"
          />
          <p className="font-semibold text-foreground">{order.name}</p>
        </div>
        <p className="text-foreground font-semibold">${order.price.subtotal}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-4 border-b-1 border-foreground-secondary/10">
          <p className="text-foreground">{t(`orders.type`)}</p>
          <p className="capitalize">
            {BoostingType[order.boostingDetails.type]}
          </p>
        </div>
        <div className="flex items-center justify-between p-4 border-b-1 border-foreground-secondary/10">
          <p className="text-foreground">{t(`orders.server`)}</p>
          <p className="capitalize">{Region[order.boostingDetails.region]}</p>
        </div>
      </div>
      <div className="flex items-center justify-end p-4">
        <ClaimOrderModal orderTitle={order.name} orderId={order.id} />
      </div>
    </div>
  );
};

export default OrderCard;
