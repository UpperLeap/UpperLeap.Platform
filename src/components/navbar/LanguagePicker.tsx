"use client";

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

const LanguagePicker = () => {
  const t = useTranslations();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          radius="full"
          className="px-4 h-7 mobile:w-full"
          isIconOnly
        >
          <span>
            <GrGlobe className=" text-xl" />
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language switcher">
        <DropdownItem
          key="en"
          href="/en"
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
          href="/de"
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
