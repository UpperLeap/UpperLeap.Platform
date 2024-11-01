"use client";

import languages from "@/data/languages.json";
import { Select, SelectItem } from "@nextui-org/select";
import { UserData } from "@/hooks/user/useModifyUser";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const LanguagesSelect = ({
  userData,
  setUserData,
}: {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
}) => {
  const t = useTranslations();

  return (
    <Select
      label={t("settings.selectLanguage")}
      labelPlacement="outside"
      variant="bordered"
      fullWidth
      placeholder={t("settings.selectLanguagesPlaceholder")}
      radius="sm"
      selectionMode="multiple"
      defaultSelectedKeys={userData.languages}
      onChange={(e) => {
        const value = e?.target?.value ? e?.target?.value?.split(",") : [];
        setUserData({ ...userData, languages: value });
        console.log(value);
      }}
    >
      {languages.map((language) => (
        <SelectItem
          key={`${language?.iso}-${language?.language}`}
          className="capitalize"
          startContent={
            <Image
              src={`https://flagcdn.com/w20/${language?.iso.toLowerCase()}.webp`}
              alt={language?.language}
              loading="lazy"
              className="object-cover w-auto"
              width={24}
              height={18}
            />
          }
        >
          {language?.language}
        </SelectItem>
      ))}
    </Select>
  );
};

export default LanguagesSelect;
