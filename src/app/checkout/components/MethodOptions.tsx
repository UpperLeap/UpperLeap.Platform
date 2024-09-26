"use client";

import useOrderDataStore from "@/stores/order";
import { useTranslations } from "next-intl";
import React from "react";
import lemonLogo from "../../../../public/lemon_squeezy_logo.jpeg";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/utils/utils";

const MethodOptions = () => {
  const t = useTranslations();
  const { paymentMethod, setOrderData } = useOrderDataStore();

  const paymentMethods = [
    {
      value: 0,
      name: "lemon",
      percentage: 5,
      imageUrl: lemonLogo,
    },
    {
      value: 1,
      name: "crypto",
      percentage: 3.9,
      imageUrl:
        "https://cdn.gameboost.com/static/payment-methods/btc-card.webp",
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-5">
      {paymentMethods.map((method) => (
        <div
          key={method.value}
          onClick={() => setOrderData({ paymentMethod: method.value })}
          className={cn(
            "flex items-center justify-between gap-2 py-4 px-5 bg-foreground-secondary/10 rounded-lg hover:bg-foreground-secondary/20 cursor-pointer duration-300",
            paymentMethod === method.value && "bg-foreground-secondary/20",
          )}
        >
          <div className="flex items-center gap-3">
            <Image
              src={method.imageUrl}
              alt={method.name}
              width={40}
              height={40}
              className="object-contain w-10 h-10 rounded-md"
            />
            <div>
              <p className="flex items-center gap-2 mb-1">
                <span className="text-foreground font-semibold text-sm">
                  {t(`checkout.${method.name}.name`)}
                </span>
                <span className="text-foreground/70 bg-foreground-secondary/10 text-xs rounded-sm px-2 py-px border border-foreground-secondary/30">
                  {method.percentage}%
                </span>
              </p>
              <p className="text-foreground/70 text-xs">
                {t(`checkout.${method.name}.description`)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-foreground text-lg ">
            {paymentMethod === method.value ? (
              <FaCheckCircle />
            ) : (
              <FaRegCircle />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MethodOptions;
