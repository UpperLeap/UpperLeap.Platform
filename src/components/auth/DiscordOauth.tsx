import { DISCORD_CLIENT_ID } from "@/constants/api";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { BsDiscord } from "react-icons/bs";

const DiscordOauth = () => {
  const t = useTranslations();
  const clientId = DISCORD_CLIENT_ID;
  const redirectUri = "https://upperleap.com/callback/discord";

  const redirect = () => {
    location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=identify+email+openid`;
  };

  return (
    <Button
      variant="bordered"
      size="sm"
      onClick={() => redirect()}
      className="w-full gap-3 px-2 py-5 text-base capitalize group hover:bg-[#6773f4] border-1 text-foreground hover:text-white"
    >
      <BsDiscord className="text-xl" />
      {/* {t("auth.discord")} */}
    </Button>
  );
};

export default DiscordOauth;
