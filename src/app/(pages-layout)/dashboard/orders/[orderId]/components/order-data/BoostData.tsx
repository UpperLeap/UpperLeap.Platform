import { getBoostData } from "@/data/valorant";
import { Order } from "@/types/order";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BoostData = ({ order }: { order: Order }) => {
  const t = useTranslations();
  const boostData = getBoostData(order);


  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <h2 className="text-foreground font-semibold py-3 px-5 border-b-1 border-foreground-secondary/20">
        {t("orders.boostData")}
      </h2>
      <div className="grid grid-cols-3 px-5 medium:grid-cols-2">
        {boostData.map((data) => (
          <div
            key={data.title}
            className="p-5 w-full max-w-[300px] flex-wrap border-b-1 border-foreground-secondary/10"
          >
            <p className="text-foreground font-medium">{t(data.title)}</p>
            <div className="flex items-center gap-2 mt-2 text-sm">
              {data.image && (
                <Image
                  width={20}
                  height={20}
                  src={data.image}
                  alt={data.title}
                />
              )}
              <p>{data.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoostData;
