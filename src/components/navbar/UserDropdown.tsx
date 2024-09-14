"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import useUser from "@/hooks/user/useUser";
import { useTranslations } from "next-intl";
import { IoChatbubblesOutline, IoExitOutline } from "react-icons/io5";
import { useLogout } from "@/hooks/auth/useLogout";
import { useRouter } from "next/navigation";
import UserAvatar from "../ui/UserAvatar";
import { useTheme } from "next-themes";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const UserDropdown = ({ isMobile = false }: { isMobile?: boolean }) => {
  const t = useTranslations();
  const router = useRouter();
  const { clearData: logout } = useLogout();
  const { data, isLoading } = useUser();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Dropdown
      isDisabled={isLoading || !data}
      radius="sm"
      classNames={{
        base: "before:bg-default-200",
        content:
          "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
    >
      <DropdownTrigger>
        <div className="flex items-center gap-2">
          <UserAvatar
            src={data?.imageUrl}
            width={40}
            height={40}
            username={data?.userName}
            className="w-10 aspect-square bg-secondary rounded-full mobile:w-9 flex items-center justify-center font-bold uppercase text-white"
          />
          {isMobile && <p className="text-default-600">{data?.userName}</p>}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        disabledKeys={["profile"]}
        className="p-2"
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
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
            textValue="Profile"
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
          <DropdownItem
            href="/dashboard"
            key="dashboard"
            startContent={<TbLayoutDashboard className="text-lg" />}
          >
            {t("navbar.dashboard")}
          </DropdownItem>
          <DropdownItem
            href="/dashboard/settings"
            key="settings"
            startContent={<IoSettingsOutline className="text-lg" />}
          >
            {t("navbar.settings")}
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem
            key="help_and_feedback"
            href="/contact-us"
            startContent={<IoChatbubblesOutline className="text-lg" />}
          >
            {t("navbar.help")}
          </DropdownItem>
          <DropdownItem
            key="theme"
            closeOnSelect={false}
            onPress={toggleTheme}
            startContent={
              theme === "dark" ? <MdSunny className="text-lg" /> : <FaMoon />
            }
          >
            {t("navbar.themeToggle")}
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="logout">
          <DropdownItem
            key="logout"
            className="text-danger hover:!text-danger"
            startContent={<IoExitOutline className="text-lg" />}
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
