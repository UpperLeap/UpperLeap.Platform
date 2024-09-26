"use client";

import useOrderDataStore from "@/stores/order";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import { FaUser, FaUserFriends } from "react-icons/fa";

const PlayWithBooster = () => {
  const t = useTranslations();
  const { setOrderData, configuration } = useOrderDataStore();

  const handlePlayWithBooster = (type: "solo" | "duo") => {
    setOrderData({
      configuration: {
        ...configuration,
        playWithBooster: type === "solo" ? false : true,
        ...(type === "duo" && { streamGames: false }),
      },
    });

  };

  return (
    <div className="my-7 px-5">
      <div className="border-1 border-foreground-secondary/20 w-full p-1 flex gap-1 items-center rounded-lg flex-wrap text-foreground">
        <button
          onClick={() => handlePlayWithBooster("solo")}
          className={cn(
            "flex items-center justify-center gap-2 flex-grow p-2 hover:bg-foreground-secondary/10 rounded-md duration-300 text-sm",
            configuration?.playWithBooster === false
              ? "!bg-foreground-secondary/20"
              : "",
          )}
        >
          <span>
            <FaUser className="text-lg" />
          </span>
          <span>{t("gameProfile.solo")}</span>
        </button>
        <button
          onClick={() => handlePlayWithBooster("duo")}
          className={cn(
            "flex items-center justify-center gap-2 flex-grow p-2 hover:bg-foreground-secondary/10 rounded-md duration-300 text-sm",
            configuration?.playWithBooster === true
              ? "!bg-foreground-secondary/20"
              : "",
          )}
        >
          <span>
            <FaUserFriends className="text-xl" />
          </span>
          <span>{t("gameProfile.duo")}</span>
        </button>
      </div>
    </div>
  );
};

export default PlayWithBooster;
