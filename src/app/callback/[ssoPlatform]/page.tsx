import { getSession } from "@/utils/auth";
import { notFound, redirect } from "next/navigation";
import AuthenticateUser from "./components/AuthenticateUser";
import { OauthPlatform } from "@/hooks/auth/useOAuthLogin";

export default async function page({
  params: { ssoPlatform },
}: {
  params: { ssoPlatform: string };
}) {
  const platforms = ["google", "twitch", "discord"];
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  if (!platforms.includes(ssoPlatform)) {
    notFound();
  }

  return (
    <section className="h-dvh w-dvw flex items-center justify-center bg-background">
      <AuthenticateUser platform={ssoPlatform as OauthPlatform} />
    </section>
  );
}
