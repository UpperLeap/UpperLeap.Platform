import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import React from "react";

const BoosterData = ({ booster }: { booster: User }) => {
  const t = useTranslations();

  return (
    <div className="bg-background-secondary/70 p-5 rounded-lg border-1 border-foreground-secondary/10 flex flex-col gap-2">
      <div>
        <h2 className="text-foreground font-semibold mb-2">
          {t("booster.about")}
        </h2>
        <p className="text-foreground-secondary text-sm whitespace-pre-wrap">
          {booster?.biography}
        </p>
      </div>
      <div>
        <h2 className="text-foreground font-semibold mb-2">
          {t("booster.languages")}
        </h2>
        <p className="text-foreground-secondary text-sm flex flex-wrap gap-1">
          {booster?.languages.map((language, index) => (
            <span key={language} className="capitalize">
              {language.split("-")[1]}
              {index < booster?.languages.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default BoosterData;
