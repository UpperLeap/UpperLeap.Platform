import { useSession } from "@/hooks/auth/useSession";
import useModalStore from "@/stores/auth_modal";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CreateOrder = ({ isPending }: { isPending: boolean }) => {
  const t = useTranslations();
  const router = useRouter();
  const { openModal } = useModalStore();
  const session = useSession();
  const isBooster =
    session?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ]?.includes("Booster");

  return (
    <Tooltip isDisabled={!isBooster} content={t("gameProfile.onlyClients")}>
      <Button
        className="w-full text-white"
        color="secondary"
        radius="sm"
        isDisabled={session?.isLoading || isPending || isBooster}
        size="lg"
        onClick={() => {
          if (!session?.isLoggedIn) {
            openModal?.();
          } else {
            router.push(`/checkout`);
          }
        }}
      >
        <span>{t("gameProfile.buyBoost")}</span>
        <span>
          <FaArrowRightLong />
        </span>
      </Button>
    </Tooltip>
  );
};

export default CreateOrder;
