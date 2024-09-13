"use client";
import { ModalHeader } from "@nextui-org/modal";
import Logo from "../shared/Logo";
import useModalStore from "@/stores/auth_modal";
import { useTranslations } from "next-intl";

const AuthPageHeader = () => {
  const t = useTranslations();
  const { currentTab, setModalData, payload } = useModalStore();

  return (
    <ModalHeader className="mx-auto my-6 w-fit flex flex-col">
      <div className="mx-auto w-fit">
        <Logo className="max-w-[140px]" />
      </div>
      <h2 className="text-foreground mt-7 text-center text-lg font-bold capitalize">
        {t(`auth.${currentTab}.title`)}
      </h2>

      <div className="flex items-center gap-1 mt-1 text-center font-normal text-sm">
        <p className="font-medium">
          {currentTab === "login" && t("auth.dontHaveAccount")}
          {currentTab === "register" && t("auth.alreadyHaveAccount")}
          {currentTab === "otp" && (
            <>
              {t("auth.sentCodeTo")}
              <span className="text-foreground">{payload.email}</span>
            </>
          )}
        </p>
        {currentTab !== "otp" && (
          <button
            className="underline"
            onClick={() =>
              setModalData({
                currentTab: currentTab === "login" ? "register" : "login",
              })
            }
          >
            {currentTab === "login"
              ? t("auth.createHere")
              : t("auth.loginHere")}
          </button>
        )}
      </div>
    </ModalHeader>
  );
};

export default AuthPageHeader;
