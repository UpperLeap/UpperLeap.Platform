"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React from "react";
import { LuBaggageClaim } from "react-icons/lu";
import { useAction } from "@/hooks/api/useAction";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Order } from "@/types/order";

const ClaimOrderModal = ({
  orderTitle,
  orderId,
}: {
  orderTitle: string;
  orderId: string;
}) => {
  const t = useTranslations();
  const router = useRouter();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  const { mutate, isPending } = useAction({
    method: "POST",
    endpoint: `/boosting/${orderId}/claim`,
    mutationOptions: {
      onSuccess: (data: Order) => {
        toast.success(t("claimOrders.orderClaimedSuccessfully"));
        onClose();
        router.push(`/dashboard/orders/${data.id}`);
      },
    },
  });

  return (
    <>
      <button
        onClick={onOpen}
        className="text-green-500 flex items-center gap-2 px-2 py-1 rounded-lg bg-green-500/20 hover:bg-green-500/30 duration-300 active:scale-90"
      >
        <span>
          <LuBaggageClaim />
        </span>
        <p>{t("claimOrders.claimOrder")}</p>
      </button>
      <Modal
        radius="sm"
        shouldBlockScroll
        motionProps={{
          variants: {
            initial: { opacity: 0, scale: 1.1 },
            enter: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
            exit: { opacity: 0, scale: 0.9, transition: { duration: 0.1 } },
          },
        }}
        placement="center"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-background-secondary card-shadow"
      >
        <ModalContent className="duration-300 ease-in-out overflow-hidden">
          <ModalHeader className="text-foreground font-medium">
            {t("claimOrders.claimOrder")}
          </ModalHeader>
          <ModalBody>
            <p className="flex items-center gap-1 flex-wrap">
              <span>{t("claimOrders.claimDescription")}</span>
              <span className="font-semibold text-foreground">
                {orderTitle}
              </span>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              onPress={onClose}
              radius="sm"
              isDisabled={isPending}
              variant="bordered"
              className="text-white"
            >
              {t("common.cancel")}
            </Button>
            <Button
              isLoading={isPending}
              radius="sm"
              isDisabled={isPending}
              color="secondary"
              className="text-white"
              onPress={() => mutate(null)}
            >
              {t("claimOrders.claim")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClaimOrderModal;
