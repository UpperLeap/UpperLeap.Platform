import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import React from "react";
import TipOptions from "./TipOptions";

const TipBooster = ({ booster }: { booster: User }) => {
  const t = useTranslations();

  return (
    <div className="bg-secondary/10 p-5 rounded-lg border-2 border-secondary/50">
      <h2 className="text-foreground font-semibold mb-2">
        {t("booster.tipBooster")}
      </h2>
      <p className="text-foreground-secondary text-sm">
        {t("booster.tipBoosterDescription")}
      </p>
      <TipOptions booster={booster} />
    </div>
  );
};

export default TipBooster;
