"use client";

import useOrderDataStore from "@/stores/order";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Slider } from "@nextui-org/slider";
import { useParams, usePathname } from "next/navigation";
import { gamesData } from "@/data/gamesData";
import AdditionalOptionsSelector from "./AdditionalOptionsSelector";
import useDebounce from "@/hooks/shared/useDebounce";

const MatchesAmount = () => {
  const t = useTranslations();
  const { gameName } = useParams();
  const pathname = usePathname().split("/").pop();
  const gameData = gamesData[gameName as keyof typeof gamesData];
  const { winAmount, setOrderData } = useOrderDataStore();
  const [amount, setAmount] = useState(winAmount);
  const debouncedWinAmount = useDebounce(amount, 500);
  const visibleOptionsList =
    gameData.visibleOptions[pathname as keyof typeof gameData.visibleOptions];

  useEffect(() => {
    setOrderData({ winAmount: debouncedWinAmount });
  }, [debouncedWinAmount]);

  return (
    <div className="bg-background-secondary/70 rounded-lg border-1 border-foreground-secondary/10">
      <div className="flex items-center gap-5 px-5 py-7 border-b-1 border-foreground-secondary/20">
        <div className="w-16 h-16 flex items-center justify-center text-foreground rounded-full bg-background/60 border-1 border-foreground-secondary/20 text-3xl font-medium">
          {amount}
        </div>
        <div>
          <h3 className="text-lg font-medium text-foreground">
            {t(`gameProfile.${pathname === "win-boost" ? "winsAmount" : "matchesAmount"}`)}
          </h3>
          <p className="text-sm text-foreground-secondary">
            {t("gameProfile.matchesAmountDescription")}
          </p>
        </div>
      </div>
      <div className="px-5 py-7 flex flex-col gap-2">
        <Slider
          size="md"
          step={1}
          color="secondary"
          label={t("gameProfile.matches")}
          maxValue={pathname === "unrated-boost" ? 15 : 5}
          onChange={(value) => {
            if (typeof value === "number") {
              setAmount(value);
            }
          }}
          classNames={{
            value: "hidden",
            label: "text-foreground",
          }}
          minValue={1}
          defaultValue={winAmount}
          className="w-full"
        />
        {pathname === "unrated-boost" && (
          <div className="mt-10">
            <AdditionalOptionsSelector
              gameOptions={gameData.options}
              visibleOptionsList={visibleOptionsList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchesAmount;
