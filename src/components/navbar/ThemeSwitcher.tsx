"use client";

import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import React from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="light"
      radius="full"
      isIconOnly
      aria-label="theme-switcher"
      className="mobile:w-full"
      onPress={toggleTheme}
    >
      {theme === "dark" ? <MdSunny className="text-xl" /> : <FaMoon />}
    </Button>
  );
};

export default ThemeSwitcher;
