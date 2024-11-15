"use client";

import { useNavbarStore } from "@/stores/navbar";
import { cn } from "@/utils/utils";
import Logo from "../shared/Logo";
import ExploreGamesLink from "./ExploreGamesLink";
import LanguagePicker from "./LanguagePicker";
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

const MobileNavbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const { isNavbarOpen, closeNavbar, openNavbar } = useNavbarStore();
  const { user } = useAuthStore();

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
          "fixed bg-background w-[350px] h-dvh left-0 top-0 z-30 duration-300 border-r-2 border-foreground-secondary/30 flex flex-col justify-between gap-2 p-5",
          isNavbarOpen ? "left-0" : "-left-[350px]",
        )}
      >
        <div className="flex flex-col gap-5">
          <Link onClick={closeNavbar} href="/" className="mb-10">
            <Logo />
          </Link>
          <ExploreGamesLink />
          <div className="flex items-center justify-between gap-5">
            <LanguagePicker isMobileView={true} />
          </div>
          {!isLoggedIn ? <ThemeSwitcher isMobileView /> : null}
        </div>
        <div>
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
