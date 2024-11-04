"use client";

import { Input } from "@/components/ui/Input";
import { useAction } from "@/hooks/api/useAction";
import { cn } from "@/utils/utils";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { GiMoneyStack } from "react-icons/gi";

const WithdrawModal = ({
  boosterId,
  balance,
}: {
  boosterId: string;
  balance: number;
}) => {
  const t = useTranslations();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const [amount, setAmount] = useState(0);

  const { mutate, isPending } = useAction({
    endpoint: `/booster/${boosterId}/withdraw`,
    method: "POST",
    mutationOptions: {
      onSuccess: () => onClose(),
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ amount, boosterId });
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="px-2 py-2 hover:bg-default-100/40 text-sm rounded-md flex items-center gap-1 hover:opacity-90 duration-300 active:scale-90"
      >
        <span className="text-lg">
          <GiMoneyStack />
        </span>
        <span>{t("transactions.withdraw")}</span>
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
            {t("transactions.requestWithdraw")}
          </ModalHeader>
          <ModalBody>
            <form
              onSubmit={handleSubmit}
              className="text-sm"
              id="withdraw-form"
            >
              <div className={balance < 50 ? "opacity-50" : ""}>
                <label className="mb-1 block text-foreground" htmlFor="amount">
                  {t("transactions.amount")}
                </label>
                <Input
                  id="amount"
                  type="number"
                  placeholder={t("transactions.amountPlaceholder")}
                  disabled={isPending || balance < 50}
                  value={amount || ""}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              <p
                className={cn(
                  "font-semibold opacity-50 text-sm mt-1",
                  balance < 50 && "text-red-500 opacity-100",
                )}
              >
                {t("transactions.minimumWithdrawal")}
              </p>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              radius="sm"
              form="withdraw-form"
              type="submit"
              isDisabled={isPending || balance < 50 || amount < 50}
              isLoading={isPending}
            >
              {t("transactions.withdraw")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WithdrawModal;
