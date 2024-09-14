"use client";

import { DropdownItem } from "@nextui-org/dropdown";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <DropdownItem
      key="theme"
      className="cursor-default"
      closeOnSelect={false}
      onPress={toggleTheme}
      startContent={
        theme === "dark" ? <MdSunny className="text-xl" /> : <FaMoon />
      }
    >
      {t("navbar.themeToggle")}
    </DropdownItem>
  );
};

export default ThemeToggle;
