"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Credential } from "@/types/order";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/Input";
import useCredentials from "@/hooks/orders/useCredentials";
import { Switch } from "@/components/ui/switch";
import { Button } from "@nextui-org/button";

const AddCredentialsSheet = ({
  children,
  orderCredentials,
  refetch,
}: {
  children: React.ReactNode;
  orderCredentials: Credential | undefined;
  refetch: () => void;
}) => {
  const t = useTranslations();
  const {
    isPending,
    updateCredentials,
    isSaveEnabled,
    credentialsPayload,
    setCredentialsPayload,
    isOpen,
    setIsOpen,
  } = useCredentials(orderCredentials, refetch);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-[450px] mobile:w-[350px] flex flex-col justify-between">
        <div>
          <SheetHeader className="text-left">
            <SheetTitle>
              {orderCredentials
                ? t("orders.editCredentials")
                : t("orders.addCredentials")}
            </SheetTitle>
          </SheetHeader>
          <form
            id="credentials-form"
            onSubmit={updateCredentials}
            className="mt-10 flex flex-col gap-5"
          >
            <Input
              placeholder={t("orders.username")}
              name="username"
              value={credentialsPayload.username}
              onChange={(e) =>
                setCredentialsPayload({
                  ...credentialsPayload,
                  username: e.target.value,
                })
              }
            />
            <Input
              placeholder={t("orders.password")}
              name="password"
              value={credentialsPayload.password}
              onChange={(e) =>
                setCredentialsPayload({
                  ...credentialsPayload,
                  password: e.target.value,
                })
              }
            />
            <div className="flex items-center justify-between gap-2 select-none opacity-50">
              <label
                htmlFor="twoFactorAuth"
                className="text-foreground-secondary flex items-center gap-2 text-sm font-medium"
              >
                {t("orders.twoFactorAuth")}
              </label>
              <Switch
                id="twoFactorAuth"
                disabled={true}
                checked={credentialsPayload.isTwoFactorEnabled}
                onCheckedChange={(checked) => {
                  setCredentialsPayload({
                    ...credentialsPayload,
                    isTwoFactorEnabled: checked,
                  });
                }}
              />
            </div>
            <div className="px-4 py-2 bg-yellow-500/20 rounded-md text-xs text-yellow-500 border-1 border-yellow-500 text-center">
              {t("orders.twoFactorAuthWarning")}
            </div>
          </form>
        </div>
        <SheetFooter>
          <Button
            color="secondary"
            radius="sm"
            isDisabled={!isSaveEnabled}
            isLoading={isPending}
            className="mt-5 w-fit self-end"
            form="credentials-form"
            type="submit"
          >
            {t("common.save")}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddCredentialsSheet;
