import AuthModal from "@/components/auth/AuthModal";
import { gatIsLoggedIn } from "@/utils/auth";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { PiJoystickFill } from "react-icons/pi";
import { PiUserCirclePlusDuotone } from "react-icons/pi";

const GetStarted = async () => {
  const t = useTranslations();
  const isLoggedIn = await gatIsLoggedIn();

  return (
    <section className="relative h-[70vh] mt-52">
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        <Image
          src={"https://blitz-cdn.blitz.gg/blitz/ui/img/game-bg/lol-f455c.webp"}
          alt="Get started"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 z-[1] h-full w-full bg-gradient-to-b from-background from-5% backdrop-blur-sm via-background/80 to-background/70 dark:via-background/95 dark:to-background/80"></div>
      </div>
      <div className="max-w-medium mx-auto flex flex-col items-center h-full justify-center px-5 text-center relative z-[2]">
        <h2 className="text-foreground font-bold text-4xl mx-auto mobile:text-3xl">
          {t("landing.getStarted.title")}
        </h2>
        <p className="max-w-2xl mt-3 mx-auto">
          {t("landing.getStarted.description")}
        </p>
        <div className="flex items-center gap-5 mt-20">
          <Link
            href="#games-list"
            className={cn(
              "flex items-center gap-2 bg-default px-4 py-2 text-foreground rounded-lg hover:bg-opacity-70 duration-300 active:scale-90",
              isLoggedIn && "bg-secondary",
            )}
          >
            <span className="text-lg">
              <PiJoystickFill />
            </span>
            <span>{t("navbar.exploreGames")}</span>
          </Link>
          {!isLoggedIn && <AuthModal isGetStarted />}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
