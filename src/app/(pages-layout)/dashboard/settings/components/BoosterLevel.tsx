import { BoosterRank, BoosterStats } from "@/types/user";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import { TbStarFilled } from "react-icons/tb";

const BoosterLevel = ({ boosterStats }: { boosterStats: BoosterStats }) => {
  const t = useTranslations();
  const ranks = {
    0: {
      nextLevelOrders: 150,
      progress: (boosterStats.totalOrders / 150) * 100,
    },
    1: {
      nextLevelOrders: 250,
      progress: (boosterStats.totalOrders / 250) * 100,
    },
    2: {
      nextLevelOrders: 500,
      progress: (boosterStats.totalOrders / 500) * 100,
    },
  };
  const nextRankInfo = ranks[boosterStats.rank as keyof typeof ranks];

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-1">
          {Array.from({ length: boosterStats.rank + 1 }, (_, index) => (
            <TbStarFilled key={index} className="text-yellow-500 text-lg" />
          ))}
        </div>
        <p className="text-foreground">
          {t(
            `settings.boosterRank.${BoosterRank[boosterStats.rank].toLowerCase()}`,
          )}
        </p>
        <p className="text-foreground text-sm font-bold">
          {boosterStats.totalOrders}
        </p>
      </div>
      <div className="flex-grow bg-default rounded-full h-5 relative">
        <div
          style={{
            width:
              boosterStats.rank >= 3 ? "100%" : `${nextRankInfo.progress}%`,
          }}
          className={
            "absolute left-0 top-0 h-full bg-gradient-to-r from-secondary to-primary rounded-full"
          }
        />
      </div>
      {boosterStats.rank < 3 ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-1">
            {Array.from({ length: boosterStats.rank + 2 }, (_, index) => (
              <TbStarFilled key={index} className="text-yellow-500 text-lg" />
            ))}
          </div>
          <p className="text-foreground">
            {t(
              `settings.boosterRank.${BoosterRank[boosterStats.rank + 1].toLowerCase()}`,
            )}
          </p>
          <p className="text-foreground text-sm font-bold">
            {nextRankInfo.nextLevelOrders}
          </p>
        </div>
      ) : (
        <p className="text-foreground">{t("settings.maxLevel")}</p>
      )}
    </div>
  );
};

export default BoosterLevel;
