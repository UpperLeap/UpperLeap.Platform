"use client";

import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import React from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/utils";

const ThemeSwitcher = ({
  isMobileView = false,
}: {
  isMobileView?: boolean;
}) => {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="light"
      isIconOnly={!isMobileView}
      aria-label="theme-switcher"
      radius={!isMobileView ? "full" : "sm"}
      className={cn(
        "mobile:w-full flex items-center !gap-2",
        isMobileView && "p-2 justify-start",
      )}
      onPress={toggleTheme}
    >
      <span>
        {theme === "dark" ? <MdSunny className="text-xl" /> : <FaMoon />}
      </span>
      {isMobileView && <span>{t("navbar.themeToggle")}</span>}
    </Button>
  );
};

export default ThemeSwitcher;
