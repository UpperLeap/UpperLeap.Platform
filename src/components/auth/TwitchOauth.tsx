"use client";
import { TWITCH_CLIENT_ID } from "@/constants/api";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { BsTwitch } from "react-icons/bs";

const TwitchOauth = () => {
  const t = useTranslations();
  const clientId = TWITCH_CLIENT_ID;

  const redirectUri = "https://upperleap.com/callback/twitch";

  const redirect = () => {
    location.href = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:read:email`;
  };

  return (
    <Button
      variant="bordered"
      onPress={() => redirect()}
      size="sm"
      className="w-full gap-3 px-2 py-5 text-base capitalize border-1 hover:bg-[#a970ff] hover:text-white"
    >
      <BsTwitch className="text-xl" />
      {/* {t("auth.twitch")} */}
    </Button>
  );
};

export default TwitchOauth;
