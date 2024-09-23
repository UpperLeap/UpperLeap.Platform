import { useSession } from "@/hooks/auth/useSession";
import useModalStore from "@/stores/auth_modal";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CreateOrder = ({ isPending }: { isPending: boolean }) => {
  const t = useTranslations();
  const router = useRouter();
  const { locale } = useParams();
  const { openModal } = useModalStore();
  const { isLoggedIn, isLoading } = useSession();

  return (
    <Button
      className="w-full text-white"
      color="secondary"
      radius="sm"
      isDisabled={isLoading || isPending}
      size="lg"
      onClick={() => {
        if (!isLoggedIn) {
          openModal?.();
        } else {
          router.push(`/${locale}/checkout`);
        }
      }}
    >
      <span>{t("gameProfile.buyBoost")}</span>
      <span>
        <FaArrowRightLong />
      </span>
    </Button>
  );
};

export default CreateOrder;
