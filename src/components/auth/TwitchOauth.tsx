"use client";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { BsTwitch } from "react-icons/bs";

const TwitchOauth = () => {
  const t = useTranslations();
  const clientId = 123;
  const redirectUri = "http://localhost:5173/callback/twitch";

  const redirect = () => {
    location.href = `https://twitch.com/twitch?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  return (
    <Button
      variant="bordered"
      // onPress={() => redirect()}
      size="sm"
      className="w-full gap-3 px-2 py-5 text-base capitalize border-1 hover:bg-[#a970ff] hover:text-white"
    >
      <BsTwitch className="text-xl" />
      {/* {t("auth.twitch")} */}
    </Button>
  );
};

export default TwitchOauth;
