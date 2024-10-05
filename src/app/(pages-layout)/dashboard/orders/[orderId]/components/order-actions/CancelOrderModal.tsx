"use client";

import { Order } from "@/types/order";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";
import { BsTrash3 } from "react-icons/bs";

const CancelOrderModal = ({ order }: { order: Order }) => {
  const t = useTranslations();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        content={t("orders.deleteOrder")}
        className="text-xs max-w-xs text-red-500"
        radius="sm"
        placement="top"
      >
        <Button
          isIconOnly
          radius="sm"
          className="text-lg text-red-500 h-9"
          size="md"
          variant="flat"
          onPress={onOpen}
        >
          <BsTrash3 />
        </Button>
      </Tooltip>
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
            {t("orders.deleteOrder")}
          </ModalHeader>
          <ModalBody>
            <p className="font-semibold">
              {t("orders.deleteOrderDescription")}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              className="text-red-500 border-red-500"
              onPress={onClose}
              radius="sm"
              variant="bordered"
            >
              {t("common.delete")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CancelOrderModal;
