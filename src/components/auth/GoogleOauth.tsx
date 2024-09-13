import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleOauth = () => {
  const t = useTranslations();

  return (
    <Button
      variant="bordered"
      radius="sm"
      size="sm"
      // onClick={() => login()}
      className="w-full gap-3 px-2 py-5 text-base capitalize border-1 text-[#4791db]"
      // disabled={isPending}
      // isLoading={isPending}
    >
      <FcGoogle className="text-xl" />
      {/* {t("auth.google")} */}
    </Button>
  );
};

export default GoogleOauth;
