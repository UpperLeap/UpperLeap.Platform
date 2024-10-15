import Logo from "@/components/shared/Logo";
import { RetroGrid } from "@/components/ui/RetroGrid";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="fixed left-0 top-0 z-50 flex h-dvh w-full overflow-hidden bg-background">
      <div className="relative z-[1] flex flex-col items-center justify-center w-full h-full">
        <Logo className="max-w-52 w-48 mb-10" />
        <h1 className="pointer-events-none text-foreground text-center text-5xl font-extrabold">
          404
        </h1>
        <p className="text-center font-semibold mt-2">
          {t("errors.notFoundPage")}
        </p>
        <Link
          href="/"
          className="rounded-lg bg-black dark:bg-white px-4 py-2 text-white dark:text-black duration-300 active:scale-95 hover:opacity-85 mt-5"
        >
          {t("errors.backToHome")}
        </Link>
        <Link
          href="https://status.upperleap.com/"
          className="hover:underline mt-5 text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.status")}
        </Link>
      </div>
      <RetroGrid />
    </div>
  );
}
