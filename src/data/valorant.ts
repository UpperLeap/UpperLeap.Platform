import { IoRocket } from "react-icons/io5";
import { GiSpartanHelmet } from "react-icons/gi";

export const valorant = {
  name: "Valorant",
  ImageUrl: "https://cdn.gameboost.com/games/logos/valorant.png",
  logo: "https://cdn.gameboost.com/games/valorant/logo/icon.svg",
  mainTitle: "valorant.mainTitle",
  subTitle: "valorant.subTitle",
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
};

export default valorant;
