"use client";

import { AdditionalOptions } from "@/data/valorant";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { useTranslations } from "next-intl";
import useOrderDataStore from "@/stores/order";

const AdditionalOptionsSelector = ({
  gameOptions,
  visibleOptionsList,
}: {
  gameOptions: AdditionalOptions;
  visibleOptionsList: string[];
}) => {
  const t = useTranslations();
  const { setOrderData } = useOrderDataStore();

  const handleChange = (optionKey: string, value: string) => {
    setOrderData({ [optionKey]: +value });
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {visibleOptionsList.map((optionKey) => {
        const selectData = gameOptions[optionKey as keyof AdditionalOptions];

        return (
          <div key={optionKey} className="w-[175px]">
            <Select
              label={t(selectData?.label)}
              variant="bordered"
              radius="sm"
              size="sm"
              labelPlacement="outside"
              classNames={{
                label: "font-medium text-sm !text-foreground/90",
                trigger: "border-1",
              }}
              disallowEmptySelection
              defaultSelectedKeys={[selectData?.options[0].value.toString()]}
              onChange={(e: any) => handleChange(optionKey, e.target.value)}
            >
              {selectData?.options.map((option) => (
                <SelectItem
                  key={option.value.toString()}
                  className="text-foreground"
                >
                  {t(option.label)}
                </SelectItem>
              ))}
            </Select>
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalOptionsSelector;
