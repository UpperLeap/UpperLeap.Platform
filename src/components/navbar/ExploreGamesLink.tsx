import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ShinyButton from "../ui/shiny-button";

const ExploreGamesLink = () => {
  const t = useTranslations();

  return (
    <Link href="#games-list">
      <ShinyButton
        text={t("navbar.exploreGames")}
        className="bg-background whitespace-nowrap"
      />
    </Link>
  );
};

export default ExploreGamesLink;
