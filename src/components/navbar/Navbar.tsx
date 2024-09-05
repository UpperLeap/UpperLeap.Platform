import Logo from "../shared/Logo";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import ExploreGamesLink from "./ExploreGamesLink";
import LanguagePicker from "./LanguagePicker";
import MobileNavbar from "./MobileNavbar";
const ThemeSwitcher = dynamic(
  () => import("../../components/navbar/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
  },
);

const Navbar = () => {
  const t = useTranslations();

  return (
    <header className="z-10 mobile:px-5 px-10 py-5 sticky top-0 border-transparent select-none before:p-px nav-header w-full">
      <div className="flex items-center justify-between gap-5 relative z-[1] max-w-large mx-auto">
        <div className="flex items-center gap-5 mobile:hidden max-w-[201px] w-full">
          <ThemeSwitcher />
          <ExploreGamesLink />
        </div>
        {/* <div className="w-10 aspect-square bg-foreground rounded-full mobile:w-9" /> */}
        <Link href="/" className="max-w-[201px] w-full">
          <Logo />
        </Link>
        <div className="flex items-center gap-5 mobile:hidden max-w-[201px] w-full justify-end">
          <LanguagePicker />
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
        <div className="hidden mobile:block">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
