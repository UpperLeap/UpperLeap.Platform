import Logo from "../shared/Logo";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";
import ExploreGamesLink from "./ExploreGamesLink";
import LanguagePicker from "./LanguagePicker";
import MobileNavbar from "./MobileNavbar";
import AuthModal from "../auth/AuthModal";
import UserDropdown from "./UserDropdown";
import { gatIsLoggedIn } from "@/utils/auth";
const ThemeSwitcher = dynamic(
  () => import("../../components/navbar/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
  },
);

const Navbar = async () => {
  const isLoggedIn = await gatIsLoggedIn();

  return (
    <header className="z-10 mobile:px-5 px-10 py-5 sticky top-0 border-transparent select-none before:p-px nav-header w-full">
      <div className="flex items-center justify-between gap-5 relative z-[1] max-w-large mx-auto">
        <div className="flex items-center gap-5 mobile:hidden max-w-[201px] w-full">
          {!isLoggedIn && <ThemeSwitcher />}
          <ExploreGamesLink />
        </div>

        <Link href="/" className="max-w-[201px] w-full">
          <Logo />
        </Link>
        <div className="flex items-center gap-5 mobile:hidden max-w-[201px] w-full justify-end">
          <LanguagePicker />

          {isLoggedIn ? <UserDropdown /> : <AuthModal />}
        </div>
        <div className="hidden mobile:block">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
