import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/skeleton";
import LanguagePicker from "../navbar/LanguagePicker";
const ThemeSwitcher = dynamic(
  () => import("../../components/navbar/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
  },
);

const Support = () => {
  const t = useTranslations();

  return (
    <div>
      <h4 className="text-foreground font-semibold text-lg mb-5">
        {t("footer.support")}
      </h4>
      <p className="max-w-lg mb-5">{t("footer.supportDescription")}</p>
      <div className="flex items-center gap-2 mb-5">
        <Link
          href="/contact-us"
          className="flex items-center gap-2 bg-default px-3 py-2 text-foreground rounded-lg hover:bg-opacity-70 duration-300 active:scale-90"
        >
          <span>
            <IoChatbubblesOutline className="text-xl" />
          </span>
          <span>{t("footer.chatWithUs")}</span>
        </Link>
        <Link
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#6773f4] px-3 py-2 text-white rounded-lg hover:bg-opacity-70 duration-300 active:scale-90"
        >
          <span>
            <FaDiscord className="text-xl" />
          </span>
          <span>{t("footer.ourCommunity")}</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <LanguagePicker />
      </div>
    </div>
  );
};

export default Support;
