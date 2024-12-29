"use client";

import { useNavbarStore } from "@/stores/navbar";
import { cn } from "@/utils/utils";
import Logo from "../shared/Logo";
// import LanguagePicker from "./LanguagePicker";
const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
  loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
});
import AuthModal from "../auth/AuthModal";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/skeleton";
import UserDropdown from "./UserDropdown";
import { useAuthStore } from "@/stores/auth";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import GamesList from "./GamesList";

const MobileNavbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const t = useTranslations();
  const { isNavbarOpen, closeNavbar, openNavbar } = useNavbarStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isNavbarOpen ? "hidden" : "auto";
    }
  }, [isNavbarOpen]);

  return (
    <>
      <button
        onClick={openNavbar}
        className="p-2 rounded-full hover:bg-gray-500/20 duration-300 active:scale-90"
      >
        <RxHamburgerMenu className="text-lg text-foreground" />
      </button>
      {isNavbarOpen && (
        <div
          className="fixed bg-black/50 w-dvw h-dvh left-0 top-0 z-20"
          onClick={closeNavbar}
        />
      )}
      <div
        className={cn(
          "fixed bg-background w-[350px] overflow-y-auto h-dvh left-0 top-0 z-30 duration-300 border-r-2 border-foreground-secondary/30 flex flex-col justify-between gap-2 py-5 px-3",
          isNavbarOpen ? "left-0" : "-left-[350px]",
        )}
      >
        <div className="flex flex-col gap-5">
          <Link onClick={closeNavbar} href="/" className="mb-7">
            <Logo />
          </Link>
          {/* <ExploreGamesLink /> */}
          <p className="text-foreground-secondary">{t("navbar.games")}</p>
          <GamesList />
        </div>
        <div className="flex flex-col gap-5">
          {/* <LanguagePicker isMobileView={true} /> */}
          {!isLoggedIn ? <ThemeSwitcher isMobileView /> : null}
          {isLoggedIn && user ? (
            <UserDropdown userData={user} isMobileView={true} />
          ) : (
            <AuthModal />
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
