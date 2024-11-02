"use client";

import Loader from "@/components/shared/Loader";
import useOAuthLogin, { OauthPlatform } from "@/hooks/auth/useOAuthLogin";
import { useTranslations } from "next-intl";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

enum OAuthPlatformEnum {
  discord,
  twitch,
  google,
}

const AuthenticateUser = ({ platform }: { platform: OauthPlatform }) => {
  const t = useTranslations();
  const { mutate, isPending } = useOAuthLogin(platform);
  const token = useSearchParams().get("code");

  useEffect(() => {
    if (isPending) return;
    if (!token) {
      toast.error(t("auth.invalidToken"));
      redirect("/");
    }

    mutate({
      token,
      type: OAuthPlatformEnum[platform as keyof typeof OAuthPlatformEnum],
    });
  }, []);

  return <Loader />;
};

export default AuthenticateUser;
