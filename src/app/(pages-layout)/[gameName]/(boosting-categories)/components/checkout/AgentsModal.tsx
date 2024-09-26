"use client";

import { Switch } from "@/components/ui/switch";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useTranslations } from "next-intl";
import AgentSelect from "./AgentSelect";
import { Button } from "@nextui-org/button";
import useOrderDataStore from "@/stores/order";
import { CiEdit } from "react-icons/ci";
import { Tooltip } from "@nextui-org/tooltip";

const AgentsModal = () => {
  const t = useTranslations();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();
  const { agents, setOrderData } = useOrderDataStore();

  return (
    <>
      <Tooltip
        classNames={{
          base: "bg-background-secondary rounded border-1 border-foreground-secondary/20",
          content: "p-0 rounded-md bg-background-secondary",
        }}
        content={
          <div>
            <div className="flex items-center border-b-1 border-foreground-secondary/20 p-3 gap-2">
              <h4 className="text-sm font-semibold  text-foreground">
                {t("gameProfile.agentsSelection")}
              </h4>
              <span className="text-[10px] bg-green-500/20 font-semibold border-1 border-green-500/70 text-green-500 py-px px-1 rounded-sm">
                {t("common.free")}
              </span>
            </div>
            <p className="text-xs p-2">
              {t("gameProfile.agentsSelectionTooltip")}
            </p>
          </div>
        }
        className="text-xs max-w-xs"
        radius="sm"
        placement="right"
      >
        <div className="flex items-center justify-between gap-2 select-none">
          <label className="text-foreground flex items-center gap-2">
            <span>{t("gameProfile.agentsSelection")}</span>
            <span className="text-xs bg-green-500/20 font-semibold border-1 border-green-500/70 text-green-500 py-px px-1.5 rounded-sm">
              {t("common.free")}
            </span>
            {agents.length > 0 && (
              <button
                onClick={onOpen}
                className="hover:bg-foreground-secondary/20 text-foreground p-1 rounded-full duration-300 text-lg"
              >
                <CiEdit />
              </button>
            )}
          </label>
          <Switch
            onCheckedChange={(value) => {
              if (value) {
                onOpen();
              } else {
                setOrderData({ agents: [] });
              }
            }}
          />
        </div>
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
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-background-secondary border border-border card-shadow"
      >
        <ModalContent className="duration-300 ease-in-out overflow-hidden">
          <ModalHeader className="text-foreground font-medium">
            {t("gameProfile.agentsSelection")}
          </ModalHeader>
          <ModalBody>
            <AgentSelect />
          </ModalBody>
          <ModalFooter>
            <Button onPress={onClose} radius="sm">
              {t("common.close")}
            </Button>
            <Button color="primary" onPress={onClose} radius="sm">
              {t("common.save")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AgentsModal;
