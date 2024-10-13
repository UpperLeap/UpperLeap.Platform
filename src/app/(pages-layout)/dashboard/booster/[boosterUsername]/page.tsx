import RequestError from "@/components/shared/RequestError";
import UserAvatar from "@/components/ui/UserAvatar";
import { getBoosterByUsername } from "@/services/booster";
import { User } from "@/types/user";
import { getTranslations } from "next-intl/server";
import BoosterData from "./components/BoosterData";
import TipBooster from "./components/TipBooster";

export default async function BoosterPage({
  params: { boosterUsername },
}: {
  params: { boosterUsername: string };
}) {
  const t = await getTranslations();
  const booster: User | null = await getBoosterByUsername(boosterUsername);

  if (!booster) return <RequestError />;

  return (
    <>
      <div className="flex items-center gap-4">
        <UserAvatar
          src={booster?.imageUrl}
          username={boosterUsername}
          width={56}
          height={56}
          className="rounded-full w-14 h-14 object-cover"
        />
        <h1 className="text-2xl text-foreground font-semibold">
          {boosterUsername}
        </h1>
      </div>
      <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
        <div className="col-span-2">
          <BoosterData booster={booster} />
        </div>
        <div className="col-span-1 ">
          <TipBooster booster={booster} />
        </div>
      </div>
    </>
  );
}
