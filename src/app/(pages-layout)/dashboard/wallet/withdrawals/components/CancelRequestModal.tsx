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
import { useAction } from "@/hooks/api/useAction";
import toast from "react-hot-toast";

const CancelRequestModal = ({ withdrawalId }: { withdrawalId: string }) => {
  const t = useTranslations();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  const { mutate: cancelWithdrawal, isPending } = useAction({
    endpoint: `/withdraws/${withdrawalId}`,
    method: "DELETE",
    mutationOptions: {
      onSuccess: () => {
        onClose();
        toast.success(t("transactions.cancelSuccess"));
      },
    },
  });

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-red-800 text-white text-xs flex items-center gap-1 px-2 py-1 rounded-lg duration-300 active:scale-90"
      >
        {t("common.cancel")}
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
            {t("transactions.cancelWithdrawalRequest")}
          </ModalHeader>
          <ModalBody>
            <p>{t("transactions.cancelWithdrawalRequestDescription")}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              radius="sm"
              color="secondary"
              className="text-white"
              onPress={cancelWithdrawal}
              isLoading={isPending}
              isDisabled={isPending}
            >
              {t("common.cancel")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CancelRequestModal;
