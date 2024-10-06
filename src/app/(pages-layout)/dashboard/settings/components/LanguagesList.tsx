import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const LanguagesList = ({ languages }: { languages: string[] }) => {
  const t = useTranslations();

  return (
    <div className="mt-2 text-sm capitalize">
      {languages.length ? (
        <div className="flex items-center gap-1">
          {languages.slice(0, 3).map((language) => (
            <div key={language}>
              <Image
                src={`https://flagcdn.com/w20/${language.split("-")[0]}.webp`}
                alt={language.split("-")[1]}
                loading="lazy"
                className="object-cover w-auto"
                width={24}
                height={18}
              />
            </div>
          ))}
        </div>
      ) : (
        t("settings.notSet")
      )}
    </div>
  );
};

export default LanguagesList;
