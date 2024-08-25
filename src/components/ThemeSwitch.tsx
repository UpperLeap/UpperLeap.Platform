"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>current theme is {theme}</p>
      <div className="flex items-center gap-2">
        <button onClick={() => setTheme("light")}>light</button>
        <button onClick={() => setTheme("dark")}>dark</button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
