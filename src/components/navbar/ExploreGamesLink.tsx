import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ExploreGamesLink = () => {
  const t = useTranslations();

  return (
    <Link
      href="#games-list"
      className="bg-background-light active:scale-90 duration-300 dark:bg-background-dark no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative whitespace-nowrap flex space-x-2 items-center z-10 rounded-full bg-background-light dark:bg-background-dark py-0.5 px-4 ring-1 dark:ring-white/20 ring-black/20">
        <span className="whitespace-nowrap">{t("navbar.exploreGames")}</span>
        <FaArrowRightLong />
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </Link>
  );
};

export default ExploreGamesLink;
