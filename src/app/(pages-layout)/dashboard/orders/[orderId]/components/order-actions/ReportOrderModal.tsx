"use client";

import { Input } from "@/components/ui/Input";
import { useAction } from "@/hooks/api/useAction";
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
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineReport } from "react-icons/md";

const ReportOrderModal = ({ order }: { order: Order }) => {
  const t = useTranslations();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const { mutate: reportOrder, isPending } = useAction({
    endpoint: `/orders/${order.id}/report`,
    method: "POST",
    mutationOptions: {
      onSuccess: () => {
        toast.success(t("orders.reportOrderSuccess"));
        onClose();
      },
    },
  });

  const handleReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description || !email) return;

    reportOrder({
      orderId: order.id,
      content: description,
      contact: email,
    });
  };

  return (
    <>
      <Tooltip
        content={t("orders.reportOrder")}
        className="text-xs max-w-xs"
        radius="sm"
        placement="top"
      >
        <Button
          isIconOnly
          radius="sm"
          className="text-xl text-yellow-800 h-9"
          size="md"
          variant="flat"
          onPress={onOpen}
        >
          <MdOutlineReport />
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
        size="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-background-secondary card-shadow"
      >
        <ModalContent className="duration-300 ease-in-out overflow-hidden">
          <ModalHeader className="text-foreground font-medium">
            {t("orders.reportOrder")}
          </ModalHeader>
          <ModalBody>
            <form
              className="flex flex-col gap-2"
              onSubmit={handleReport}
              id="report-order-form"
            >
              <div>
                <label
                  htmlFor="report-order-description"
                  className="text-sm font-medium mb-1 block text-foreground"
                >
                  {t("orders.reportDescription")}
                </label>
                <textarea
                  id="report-order-description"
                  className="border-1 border-foreground-secondary/20 rounded-lg p-2 w-full text-sm placeholder:text-sm resize-none h-20"
                  placeholder={t("orders.reportOrderDescription")}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  disabled={isPending}
                />
              </div>
              <div>
                <label
                  htmlFor="report-order-email"
                  className="text-sm font-medium mb-1 block text-foreground"
                >
                  {t("orders.email")}
                </label>
                <Input
                  type="email"
                  id="report-order-email"
                  className="border-1 border-foreground-secondary/20 rounded-lg p-2 w-full text-sm placeholder:text-sm"
                  placeholder={t("orders.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isPending}
                  required
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              type="submit"
              radius="sm"
              form="report-order-form"
              isLoading={isPending}
              isDisabled={!description || !email || isPending}
            >
              {t("common.report")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReportOrderModal;
