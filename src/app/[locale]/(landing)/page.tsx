import { useTranslations } from "next-intl";
import Hero from "./components/Hero";
import Arc from "./components/Arc";
import GamesList from "./components/GamesList";
import "@/styles/landing.css";
import { Announcement } from "./components/Announcement";
import { VelocityScroll } from "@/components/ui/VelocityScroll";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="relative z-[1] py-20">
      <div className="mb-10">
        <Announcement />
      </div>
      <Hero />
      <Arc />
      <GamesList />
      <div className="my-20">
        <VelocityScroll
          text="GG WP  BOOST RANK"
          default_velocity={1}
          className="font-display text-center text-6xl font-bold tracking-[-0.02em] text-foreground drop-shadow-sm  md:text-7xl md:leading-[5rem]"
        />
      </div>
    </main>
  );
}
