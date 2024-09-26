import { useTranslations } from "next-intl";
import Hero from "./components/Hero";
import Arc from "./components/Arc";
import GamesList from "./components/GamesList";
import "@/styles/landing.css";
import { Announcement } from "./components/Announcement";
import { VelocityScroll } from "@/components/ui/VelocityScroll";
import Services from "./components/Services";
import Faq from "./components/Faq";
import GetStarted from "./components/GetStarted";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="relative z-[1] pt-20">
      <div className="mb-10">
        <Announcement />
      </div>
      <Hero />
      <Arc />
      <GamesList />
      <div className="my-52 relative">
        <div className="h-full w-full bg-gradient-to-r from-background via-transparent to-background z-[1] absolute" />
        <VelocityScroll
          text={t("landing.velocityScroll")}
          default_velocity={1}
          className="font-display text-center text-6xl font-bold tracking-[-0.02em] text-foreground drop-shadow-sm z-0  md:text-7xl md:leading-[5rem]"
        />
      </div>
      <Services />
      <Faq />
      <GetStarted />
    </main>
  );
}
