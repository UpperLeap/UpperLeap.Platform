import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(() => import("../../components/ThemeSwitch"), {
  ssr: false,
});

export default function Home() {
  const t = useTranslations();

  return (
    <main className="m-10 h-[200vh]">
      <h1 className="text-5xl font-bold">Welcome</h1>
      <h2 className="text-2xl font-semibold my-5">
        Next - Ts - UpperLeap or{" "}
        <span className="text-pink-500 uppercase">idk</span>
      </h2>
      <p>{t("welcome")}</p>
      <ThemeSwitch />
    </main>
  );
}
