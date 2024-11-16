import RequestError from "@/components/shared/RequestError";
import UserAvatar from "@/components/ui/UserAvatar";
import { getBoosterByUsername } from "@/services/booster";
import { User } from "@/types/user";
import { getTranslations } from "next-intl/server";
import BoosterData from "./components/BoosterData";
import TipBooster from "./components/TipBooster";
import { Metadata } from "next";
import { TbStarFilled } from "react-icons/tb";

export function generateMetadata({
  params: { boosterUsername },
}: {
  params: { boosterUsername: string };
}): Metadata {
  return {
    title: boosterUsername,
    description: `${boosterUsername} booster page`,
  };
}

export default async function BoosterPage({
  params: { boosterUsername },
}: {
  params: { boosterUsername: string };
}) {
  const t = await getTranslations();
  const booster: User | null = await getBoosterByUsername(boosterUsername);

  console.log(booster);

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
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl text-foreground font-semibold">
            {boosterUsername}
          </h1>
          {booster.boosterStats && (
            <div className="flex items-center gap-1">
              {Array.from(
                { length: booster.boosterStats.rank + 1 },
                (_, index) => (
                  <TbStarFilled
                    key={index}
                    className="text-yellow-500 text-lg"
                  />
                ),
              )}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
        <div className="col-span-2">
          <BoosterData booster={booster} />
        </div>
        {/* <div className="col-span-1 ">
          <TipBooster booster={booster} />
        </div> */}
      </div>
    </>
  );
}
