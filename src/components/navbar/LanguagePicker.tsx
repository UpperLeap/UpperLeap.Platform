"use client";

import { setUserLocale } from "@/services/locale";
import { cn } from "@/utils/utils";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GrGlobe } from "react-icons/gr";

const LanguagePicker = ({
  isMobileView = false,
}: {
  isMobileView?: boolean;
}) => {
  const t = useTranslations();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          radius={isMobileView ? "sm" : "full"}
          className={cn(
            "p-4 mobile:w-full",
            isMobileView && "justify-start p-2",
          )}
          isIconOnly={!isMobileView}
        >
          <span>
            <GrGlobe className=" text-xl" />
          </span>
          <span>{isMobileView ? t("navbar.language") : null}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language switcher">
        <DropdownItem
          key="en"
          onPress={() => {
            setUserLocale("en");
          }}
          startContent={
            <Image
              src="https://flagcdn.com/w20/us.webp"
              alt="english"
              loading="lazy"
              className="object-cover w-auto"
              width={24}
              height={18}
            />
          }
        >
          {t("navbar.english")}
        </DropdownItem>
        <DropdownItem
          key="de"
          onPress={() => {
            setUserLocale("de");
          }}
          startContent={
            <Image
              src="https://flagcdn.com/w20/de.webp"
              alt="deutsch"
              loading="lazy"
              className="object-cover w-auto"
              width={24}
              height={18}
            />
          }
        >
          {t("navbar.deutsch")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguagePicker;
