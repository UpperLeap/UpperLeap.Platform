import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../shared/Logo";
import ExploreGamesLink from "./ExploreGamesLink";
import LanguagePicker from "./LanguagePicker";
import { Skeleton } from "@nextui-org/skeleton";
import dynamic from "next/dynamic";
import AuthModal from "../auth/AuthModal";
import UserDropdown from "./UserDropdown";
import { getIsLoggedIn } from "@/utils/auth";
const ThemeSwitcher = dynamic(
  () => import("../../components/navbar/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
  },
);

const MobileNavbar = async () => {
  const isLoggedIn = await getIsLoggedIn();

  return (
    <Sheet>
      <SheetTrigger className="p-2 rounded-full hover:bg-gray-500/20 duration-300 active:scale-90">
        <RxHamburgerMenu className="text-lg text-foreground" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[350px]">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between gap-5 mt-10">
          <ExploreGamesLink />
          <div className="flex items-center justify-between gap-5">
            <LanguagePicker />
          </div>
          <ThemeSwitcher />
          {isLoggedIn ? <UserDropdown isMobile /> : <AuthModal />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
