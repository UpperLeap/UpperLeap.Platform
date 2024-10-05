import { IoRocket } from "react-icons/io5";
import { GiSpartanHelmet } from "react-icons/gi";
import { CurrentRating, Order, Region } from "@/types/order";
import { BoostingType } from "@/types/game";

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
  "win-boost": {
    title: "valorant.winBoostTitle",
    subTitle: "valorant.winBoostSubTitle",
    image: "https://cdn.gameboost.com/boost-forms/icons/dark/VALWinBoost.svg",
    icon: null,
  },
  "placement-boost": {
    title: "valorant.placementBoostTitle",
    subTitle: "valorant.placementBoostSubTitle",
    image:
      "https://cdn.gameboost.com/boost-forms/icons/dark/VALPlacementsBoost.svg",
    icon: null,
  },
  "unrated-boost": {
    title: "valorant.unratedBoostTitle",
    subTitle: "valorant.unratedBoostSubTitle",
    image:
      "https://cdn.gameboost.com/boost-forms/icons/dark/VALUnratedMatches.svg",
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
  ranks: [
    {
      name: "valorant.ranks.iron",
      title: "Iron",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Iron.webp",
      hiddenOn: null,
      color: "#4e4e4e",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.bronze",
      title: "Bronze",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Bronze.webp",
      hiddenOn: null,
      color: "#79541a",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.silver",
      title: "Silver",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Silver.webp",
      hiddenOn: null,
      color: "#b8bdbb",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.gold",
      title: "Gold",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Gold.webp",
      hiddenOn: null,
      color: "#ebbd44",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.platinum",
      title: "Platinum",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Platinum.webp",
      hiddenOn: null,
      color: "#39a4b6",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.diamond",
      title: "Diamond",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Diamond.webp",
      hiddenOn: null,
      color: "#b362ca",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.ascendant",
      title: "Ascendant",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Ascendant.webp",
      hiddenOn: null,
      color: "#3a8a5f",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.immortal",
      title: "Immortal",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Immortal.webp",
      hiddenOn: null,
      color: "#8b163e",
      isDivisionsVisible: true,
    },
    {
      name: "valorant.ranks.radiant",
      title: "Radiant",
      image: "https://cdn.gameboost.com/games/valorant/tiers/Radiant.webp",
      hiddenOn: ["rank-boost"],
      color: "#b1b1af",
      isDivisionsVisible: false,
    },
  ],
  divisions: [
    {
      value: 1,
      title: "1",
    },
    {
      value: 2,
      title: "2",
    },
    {
      value: 3,
      title: "3",
    },
  ],
  options: {
    currentPoints: {
      label: "gameProfile.currentRr",
      key: "currentPoints",
      options: [
        {
          label: "valorant.currentRR.R20",
          value: 0,
        },
        {
          label: "valorant.currentRR.R40",
          value: 1,
        },
        {
          label: "valorant.currentRR.R60",
          value: 2,
        },
        {
          label: "valorant.currentRR.R80",
          value: 3,
        },
        {
          label: "valorant.currentRR.R100",
          value: 4,
        },
      ],
    },
    server: {
      label: "gameProfile.server",
      key: "server",
      options: [
        {
          label: "gameProfile.servers.eu",
          value: 0,
        },
        {
          label: "gameProfile.servers.na",
          value: 1,
        },
      ],
    },
    gameMode: {
      label: "gameProfile.gameMode",
      key: "gameMode",
      options: [
        {
          label: "gameProfile.unrated",
          value: 0,
        },
        {
          label: "gameProfile.featured",
          value: 1,
        },
      ],
    },
  },
  visibleOptions: {
    "rank-boost": ["currentPoints", "server"],
    "win-boost": ["server"],
    "placement-boost": ["server"],
    "unrated-boost": ["server", "gameMode"],
  },
  detailsBanner: {
    "rank-boost": {
      current: "rank",
      desired: "rank",
    },
    "win-boost": {
      current: "rank",
      desired: "wins",
    },
    "placement-boost": {
      current: "rank",
      desired: "wins",
    },
    "unrated-boost": {
      current: "unrated",
      desired: "wins",
    },
  },
  configurations: {
    priorityBoost: {
      label: "gameProfile.priorityBoost",
      percentage: 25,
      tooltip: "gameProfile.priorityBoostTooltip",
    },
    streamGames: {
      label: "gameProfile.streamGames",
      percentage: 20,
      tooltip: "gameProfile.streamGamesTooltip",
    },
    soloOnlyQueue: {
      label: "gameProfile.soloOnlyQueue",
      percentage: 60,
      tooltip: "gameProfile.soloOnlyQueueTooltip",
    },
  },
};

export type BoostingCategories = (typeof valorant.boostingCategories)[number];

export type PageHeaderData = typeof valorant.boosting;

export type Ranks = (typeof valorant.ranks)[number];

export type Divisions = (typeof valorant.divisions)[number];

export type AdditionalOptions = typeof valorant.options;

export function getVisibleRanks(boostType: string): Ranks[] {
  return valorant.ranks.filter(
    (rank) => rank.hiddenOn === null || !rank.hiddenOn.includes(boostType),
  );
}

export function getBoostData(order: Order) {
  return [
    {
      title: "orders.startTier",
      image: valorant.ranks.find(
        (rank) => rank.title === order.boostingDetails.currentRank,
      )?.image,
      value: order.boostingDetails.currentRank,
    },
    {
      title: "orders.startDivision",
      image: null,
      value: order.boostingDetails.currentDivision,
    },
    {
      title: "orders.endTier",
      image: valorant.ranks.find(
        (rank) => rank.title === order.boostingDetails.desiredRank,
      )?.image,
      value: order.boostingDetails.desiredRank,
    },
    {
      title: "orders.endDivision",
      image: null,
      value: order.boostingDetails.desiredDivision,
    },
    {
      title: "orders.rankRating",
      value: CurrentRating[order.boostingDetails.currentRating],
    },
  ];
}

export function getBoostOptions(order: Order) {
  const options = Object.entries(order?.boostingDetails?.configuration)?.map(
    ([key, value]) => {
      return {
        title: key,
        value: value,
      };
    },
  );

  const filteredOptions = options.filter(
    (option) =>
      option.value &&
      option.title !== "boostingDetailId" &&
      option.title !== "id",
  );

  if (order.boostingDetails.vpnCountry) {
    filteredOptions.push({
      title: "orderVpn",
      value: order.boostingDetails.vpnCountry,
    });
  }

  if (order.boostingDetails.valorantAgents) {
    filteredOptions.push({
      title: "agentsSelection",
      value: order.boostingDetails.valorantAgents.join(", "),
    });
  }

  return filteredOptions;
}

export function getBoostInformation(order: Order) {
  return [
    {
      title: "orders.title",
      value: order.name,
    },
    {
      title: "orders.game",
      value: order.boostingDetails.game.name,
    },
    {
      title: "orders.type",
      value: BoostingType[order.boostingDetails.type],
    },
    {
      title: "orders.server",
      value: Region[order.boostingDetails.region],
    },
    {
      title: "orders.price",
      value: `$${order.price.total}`,
    },
  ];
}
export default valorant;
