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
import { FaArrowRight } from "react-icons/fa6";

const RejectionReasonModal = ({ reason }: { reason: string }) => {
  const t = useTranslations();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="text-foreground text-xs flex items-center gap-1 px-2 py-1 rounded-lg duration-300 active:scale-90"
      >
        <p>{t("transactions.reason")}</p>
        <span>
          <FaArrowRight />
        </span>
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
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-background-secondary card-shadow"
      >
        <ModalContent className="duration-300 ease-in-out overflow-hidden">
          <ModalHeader className="text-foreground font-medium">
            {t("transactions.rejectionReason")}
          </ModalHeader>
          <ModalBody>
            <p>{reason}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              radius="sm"
              color="secondary"
              className="text-white"
              onPress={onClose}
            >
              {t("common.close")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RejectionReasonModal;
