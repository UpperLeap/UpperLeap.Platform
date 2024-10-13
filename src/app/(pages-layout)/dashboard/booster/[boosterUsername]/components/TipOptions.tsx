"use client";

import { Input } from "@/components/ui/Input";
import { useTipStore } from "@/stores/tip";
import { User } from "@/types/user";
import { cn } from "@/utils/utils";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TipOptions = ({ booster }: { booster: User }) => {
  const t = useTranslations();
  const { amount, boosterData, setData } = useTipStore();
  const options = [20, 50, 100];

  return (
    <div className="mt-5">
      <div className="flex items-center gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setData({ ...boosterData, amount: option })}
            className={cn(
              "flex-grow bg-foreground-secondary/10 border border-foreground-secondary rounded-md p-2 text-foreground hover:bg-foreground-secondary/20 active:scale-95 duration-300",
              amount === option && "bg-foreground-secondary/30",
            )}
          >
            ${option}
          </button>
        ))}
      </div>
      <Input
        type="number"
        className="mt-5 "
        placeholder={t("booster.customAmount")}
        value={amount || ""}
        onChange={(e) =>
          setData({ ...boosterData, amount: Number(e.target.value) })
        }
      />
      <Button
        isDisabled={!amount}
        radius="sm"
        className="w-full mt-5 text-white"
        color="secondary"
        onPress={() => {
          // todo: Implement tipping to checkout
        }}
      >
        <span>{t("booster.tip")}</span>
        <span>
          <FaArrowRightLong />
        </span>
      </Button>
    </div>
  );
};

export default TipOptions;
