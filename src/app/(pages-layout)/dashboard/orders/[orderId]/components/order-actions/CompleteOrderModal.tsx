"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Order } from "@/types/order";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { useAction } from "@/hooks/api/useAction";

const CompleteOrderModal = ({ order }: { order: Order }) => {
  const t = useTranslations();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const { mutate, isPending } = useAction({
    method: "POST",
    endpoint: `/boosting/${order.id}/complete`,
    mutationOptions: {
      onSuccess: () => {
        onClose();
        router.refresh();
      },
    },
  });

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-secondary px-4 py-2 text-sm rounded-md text-white font-semibold flex items-center gap-1 hover:opacity-90 duration-300 active:scale-90"
      >
        <span className="text-base">
          <FaCheckCircle />
        </span>
        <span>{t("orders.completeOrder")}</span>
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
            {t("orders.completeOrder")}
          </ModalHeader>
          <ModalBody>
            <p className="font-semibold">
              {t("orders.completeOrderDescription")}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isPending}
              isDisabled={isPending}
              onPress={() => mutate(null)}
              className="text-white"
              radius="sm"
              color="secondary"
            >
              {t("common.complete")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompleteOrderModal;
