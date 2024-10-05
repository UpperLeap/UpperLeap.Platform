"use client";

import { Select, SelectItem } from "@nextui-org/select";
import countries from "@/data/vpn.json";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CountrySelect = ({
  country,
  setCountry,
}: {
  country: string;
  setCountry: (country: string) => void;
}) => {
  const t = useTranslations();

  return (
    <Select
      label={t("orders.selectCountry")}
      labelPlacement="outside"
      variant="bordered"
      radius="sm"
      disallowEmptySelection
      defaultSelectedKeys={[country]}
      onChange={(e) => setCountry(e.target.value)}
    >
      {countries.map((country) => (
        <SelectItem
          key={country?.name}
          startContent={
            <Image
              src={`https://flagcdn.com/w20/${country?.isoCode?.toLowerCase()}.webp`}
              alt={country?.name}
              loading="lazy"
              className="object-cover w-auto"
              width={24}
              height={18}
            />
          }
        >
          {country.name}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CountrySelect;
