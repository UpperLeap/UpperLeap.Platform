"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import useUser from "@/hooks/user/useUser";
import Image from "next/image";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/skeleton";
import { IoExitOutline } from "react-icons/io5";
import { useLogout } from "@/hooks/auth/useLogout";
import { useRouter } from "next/navigation";
import UserAvatar from "../ui/UserAvatar";
const ThemeSwitcher = dynamic(
  () => import("../../components/navbar/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-10 h-10 rounded-full" />,
  },
);

const UserDropdown = () => {
  const t = useTranslations();
  const router = useRouter();
  const { clearData: logout } = useLogout();
  const { data, isLoading } = useUser();

  return (
    <Dropdown
      isDisabled={isLoading || !data}
      radius="sm"
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <div>
          <UserAvatar
            src={data?.imageUrl}
            width={40}
            height={40}
            username={data?.userName}
            className="w-10 aspect-square bg-secondary rounded-full mobile:w-9 flex items-center justify-center font-bold uppercase text-white"
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            href="/dashboard/profile"
            key="profile"
            className="h-14 gap-2"
          >
            <div className="flex items-center gap-2">
              <UserAvatar
                src={data?.imageUrl}
                width={30}
                height={30}
                username={data?.userName}
                className="w-8 aspect-square bg-secondary rounded-full mobile:w-9 flex items-center justify-center font-bold uppercase text-white"
              />
              <div>
                <p className="text-default-600">{data?.userName}</p>
              </div>
            </div>
          </DropdownItem>
          <DropdownItem href="/dashboard" key="dashboard">
            {t("navbar.dashboard")}
          </DropdownItem>
          <DropdownItem href="/dashboard/settings" key="settings">
            {t("navbar.settings")}
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem key="help_and_feedback" href="/contact-us">
            {t("navbar.help")}
          </DropdownItem>
          <DropdownItem
            isReadOnly
            key="theme"
            className="cursor-default"
            endContent={<ThemeSwitcher />}
          >
            {t("navbar.themeToggle")}
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="logout">
          <DropdownItem
            key="logout"
            className="text-danger hover:!text-danger"
            startContent={<IoExitOutline className="text-xl" />}
            onPress={() => {
              logout();
              router.refresh();
            }}
          >
            {t("navbar.logout")}
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
