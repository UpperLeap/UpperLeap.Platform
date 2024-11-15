"use client";

import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import LoginForm from "./LoginForm";
import GoogleOauth from "./GoogleOauth";
import Divider from "../ui/Divider";
import DiscordOauth from "./DiscordOauth";
import TwitchOauth from "./TwitchOauth";
import useModalStore from "@/stores/auth_modal";
import RegisterForm from "./RegisterForm";
import VerificationForm from "./VerificationForm";
import "@/styles/auth.css";
import AuthPageHeader from "./AuthPageHeader";
import { PiUserCirclePlusDuotone } from "react-icons/pi";

export default function AuthModal({
  isGetStarted = false,
}: {
  isGetStarted?: boolean;
}) {
  const t = useTranslations();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { setModalData, currentTab, isModalOpen } = useModalStore();

  useEffect(() => {
    setModalData({ openModal: onOpen, closeModal: onClose });
    if (isModalOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isOpen) return;
    setModalData({
      currentTab: "login",
      payload: {
        otp: "",
        email: "",
        username: "",
      },
    });
  }, [isOpen]);

  return (
    <>
      <Button
        radius="sm"
        aria-label="login"
        color="secondary"
        size="md"
        className="text-white mobile:w-full"
        onPress={onOpen}
      >
        {!isGetStarted ? (
          <>
            <span>{t("navbar.login")}</span>
            <span>
              <FaArrowRightLong />
            </span>
          </>
        ) : (
          <>
            <span className="text-xl">
              <PiUserCirclePlusDuotone />
            </span>
            <span>{t("navbar.login")}</span>
          </>
        )}
      </Button>
      <Modal
        radius="sm"
        hideCloseButton
        shouldBlockScroll
        isDismissable={currentTab !== "otp"}
        motionProps={{
          variants: {
            initial: { opacity: 0, scale: 1.1 },
            enter: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
            exit: { opacity: 0, scale: 0.9, transition: { duration: 0.1 } },
          },
        }}
        placement="center"
        size={currentTab === "otp" ? "md" : "lg"}
        isOpen={isOpen}
        onOpenChange={(value) => {
          onOpenChange();
          setModalData({ isModalOpen: value });
        }}
        className="bg-background border border-border card-shadow"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="duration-300 ease-in-out overflow-hidden">
          {(onClose) => (
            <>
              <span className="absolute -top-28 left-1/2 z-[0] h-36 w-52 -translate-x-1/2 rounded-full bg-primary/90 blur-3xl" />
              <div className="grid-bg-card relative">
                <AuthPageHeader />
                <ModalBody className="pb-4">
                  {currentTab !== "otp" && (
                    <div>
                      <div className="flex items-center gap-5 mobile:flex-col">
                        <TwitchOauth />
                        <DiscordOauth />
                        <GoogleOauth />
                      </div>
                      <Divider text={t("auth.or")} className="my-3" />
                    </div>
                  )}
                  {currentTab === "login" && <LoginForm />}
                  {currentTab === "register" && <RegisterForm />}
                  {currentTab === "otp" && <VerificationForm />}
                </ModalBody>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
