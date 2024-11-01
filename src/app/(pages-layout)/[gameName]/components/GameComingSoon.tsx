import { BasicGame } from "@/types/game";
import { useTranslations } from "next-intl";
import Image from "next/image";
import GetNotifiedForm from "./GetNotifiedForm";
import { IoGameControllerOutline } from "react-icons/io5";
const GameComingSoon = ({ game }: { game: BasicGame }) => {
  const t = useTranslations();

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-5 mb-14">
        <div className="p-3 rounded-full bg-background-secondary border-1 border-foreground-secondary/20">
          {game.iconUrl ? (
            <Image
              src={game.iconUrl}
              alt={`${game.name} logo`}
              width={30}
              height={30}
              loading="lazy"
            />
          ) : (
            <span>
              <IoGameControllerOutline className="text-2xl text-foreground" />
            </span>
          )}
        </div>
        <h1 className="text-2xl text-foreground font-semibold flex items-center gap-1 flex-wrap">
          <span className="capitalize">{game?.name?.toLowerCase()}</span>
          <span>{t("gameProfile.servicesAreComingSoon")}</span>
        </h1>
      </div>
      <div>
        <p className="text-foreground max-w-xl">
          {t("gameProfile.comingSoonDescription")}
        </p>
        <p className="text-foreground max-w-xl mt-5">
          {t("gameProfile.getNotifiedDescription")}
        </p>
      </div>
      <GetNotifiedForm />
    </div>
  );
};

export default GameComingSoon;
