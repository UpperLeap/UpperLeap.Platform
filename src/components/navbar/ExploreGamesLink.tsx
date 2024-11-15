"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ShinyButton from "../ui/shiny-button";
import { useNavbarStore } from "@/stores/navbar";

const ExploreGamesLink = () => {
  const t = useTranslations();
  const { closeNavbar } = useNavbarStore();

  return (
    <Link href="/#games-list">
      <ShinyButton
        onClick={closeNavbar}
        text={t("navbar.exploreGames")}
        className="bg-background whitespace-nowrap"
      />
    </Link>
  );
};

export default ExploreGamesLink;
