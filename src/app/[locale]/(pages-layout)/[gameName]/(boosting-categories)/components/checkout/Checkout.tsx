"use client";

import { useTranslations } from "next-intl";
import BoostDetailsBanner from "./BoostDetailsBanner";
import PlayWithBooster from "./PlayWithBooster";
import Configurations from "./Configurations";
import Discount from "./Discount";
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";
import useCalculate from "@/hooks/orders/useCalculate";
import Price from "./Price";

const Checkout = () => {
  const t = useTranslations();
  const { isPending, priceData } = useCalculate();

  return (
    <div className="bg-background-secondary/70 rounded-lg border-1 border-foreground-secondary/10">
      <div className="p-5 py-7 text-center">
        <h3 className="text-foreground font-medium">
          {t("gameProfile.checkout")}
        </h3>
        <p className="text-sm">{t("gameProfile.addExtras")}</p>
      </div>
      <BoostDetailsBanner />
      <PlayWithBooster />
      <Configurations />
      <div className="h-[1px] flex items-center justify-center gap-4 bg-foreground-secondary/20 text-foreground  my-7" />
      <Discount priceData={priceData} isPending={isPending} />
      <div className="px-5 mt-7 mb-5 flex flex-col gap-3">
        <Price priceData={priceData} />

        <Button
          className="w-full text-white"
          color="secondary"
          radius="sm"
          size="lg"
        >
          <span>{t("gameProfile.buyBoost")}</span>
          <span>
            <FaArrowRightLong />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
