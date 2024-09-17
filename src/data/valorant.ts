import { IoRocket } from "react-icons/io5";
import { GiSpartanHelmet } from "react-icons/gi";
import { IconType } from "react-icons/lib";

export const valorant = {
  name: "Valorant",
  ImageUrl: "https://cdn.gameboost.com/games/logos/valorant.png",
  logo: "https://cdn.gameboost.com/games/valorant/logo/icon.svg",
  mainTitle: "gameProfile.valorant.mainTitle",
  subTitle: "gameProfile.valorant.subTitle",
  boostingTitle: "gameProfile.valorant.boostingTitle",
  boostingSubTitle: "gameProfile.valorant.boostingSubTitle",
  main: {
    title: "gameProfile.valorant.mainTitle",
    subTitle: "gameProfile.valorant.subTitle",
    image: "https://cdn.gameboost.com/games/valorant/logo/icon.svg",
    icon: null,
  },
  boosting: {
    title: "gameProfile.valorant.boostingTitle",
    subTitle: "gameProfile.valorant.boostingSubTitle",
    image: null,
    icon: IoRocket,
  },
  "rank-boost": {
    title: "gameProfile.valorant.rankBoostTitle",
    subTitle: "gameProfile.valorant.rankBoostSubTitle",
    image: "https://cdn.gameboost.com/boost-forms/icons/dark/VALRankBoost.svg",
    icon: null,
  },
  boostingIcon: IoRocket,
  tabs: [
    {
      name: "gameProfile.boosting",
      path: "boosting",
      icon: IoRocket,
      isActive: true,
    },
    {
      name: "gameProfile.accounts",
      path: "accounts",
      icon: GiSpartanHelmet,
      isActive: false,
    },
  ],
  visibleSections: ["boosting"],
  boostingCategories: [
    {
      name: "gameProfile.rankBoost",
      path: "rank-boost",
      description: "gameProfile.rankBoostDescription",
      image:
        "https://cdn.gameboost.com/boost-forms/banners/val-rank-boost.webp",
    },
    {
      name: "gameProfile.winBoost",
      path: "win-boost",
      description: "gameProfile.winBoostDescription",
      image: "https://cdn.gameboost.com/boost-forms/banners/val-win-boost.webp",
    },
    {
      name: "gameProfile.placementBoost",
      path: "placement-boost",
      description: "gameProfile.placementBoostDescription",
      image:
        "https://cdn.gameboost.com/boost-forms/banners/val-placements-boost.webp",
    },
    {
      name: "gameProfile.unratedMatches",
      path: "unrated-boost",
      description: "gameProfile.unratedMatches",
      image:
        "https://cdn.gameboost.com/boost-forms/banners/val-unrated-boost.webp",
    },
  ],
  disclaimer: "gameProfile.valorant.disclaimer",
};

export type BoostingCategories = (typeof valorant.boostingCategories)[number];

export type PageHeaderData = typeof valorant.boosting;

export default valorant;
