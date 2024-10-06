"use client";

import { User } from "@/types/user";
import UserAvatar from "@/components/ui/UserAvatar";
import { MdOutlineEdit } from "react-icons/md";
import useUploadImage from "@/hooks/user/useUploadImage";
import { useTranslations } from "next-intl";

const UserImage = ({ user }: { user: User }) => {
  const t = useTranslations();
  const { uploadImage, isPending, newImage } = useUploadImage();

  return (
    <form className="w-fit group">
      <p className="text-foreground-secondary text-sm font-semibold mb-2">
        {t("settings.avatar")}
      </p>
      <label className="cursor-pointer relative w-fit group-hover:opacity-80 duration-300">
        <UserAvatar
          src={newImage || user?.imageUrl}
          username={user?.userName}
          className="w-28 h-28 rounded-full font-bold text-2xl"
          width={100}
          height={100}
        />
        <span className="absolute bottom-0 -right-0 text-foreground p-1 rounded-full bg-default-100 text-xl">
          <MdOutlineEdit />
        </span>
        <input
          type="file"
          id="user-pfp"
          accept="image/*"
          className="hidden"
          onChange={(e) => uploadImage(e.target.files?.[0])}
          disabled={isPending}
        />
      </label>
    </form>
  );
};

export default UserImage;
