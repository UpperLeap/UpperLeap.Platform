import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../shared/Logo";
import ExploreGamesLink from "./ExploreGamesLink";
import LanguagePicker from "./LanguagePicker";
import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";

const MobileNavbar = () => {
  const t = useTranslations();

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
          <Button
            radius="full"
            aria-label="login"
            color="secondary"
            className="text-white"
          >
            {t("navbar.login")}
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
