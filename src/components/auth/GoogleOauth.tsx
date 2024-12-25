import { GOOGLE_CLIENT_ID } from "@/constants/api";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleOauth = () => {
  const t = useTranslations();
  const clientId = GOOGLE_CLIENT_ID;

  const redirectUri = "https://upperleap.com/callback/google";

  const redirect = () => {
    location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}`;
  };

  return (
    <Button
      variant="bordered"
      radius="sm"
      size="sm"
      onPress={() => redirect()}
      className="w-full gap-3 px-2 py-5 text-base capitalize border-1 hover:bg-[#dd5447] hover:text-white"
    >
      <FaGoogle className="text-xl" />
      {/* {t("auth.google")} */}
    </Button>
  );
};

export default GoogleOauth;
