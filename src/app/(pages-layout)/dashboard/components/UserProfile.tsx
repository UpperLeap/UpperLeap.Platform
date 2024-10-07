"use client";

import UserAvatar from "@/components/ui/UserAvatar";
import { useAuthStore } from "@/stores/auth";
import Image from "next/image";
import Link from "next/link";

const UserProfile = () => {
  const { user } = useAuthStore();

  return (
    <Link href="/dashboard/settings" className="flex items-center gap-2 p-2">
      <UserAvatar
        src={user?.imageUrl}
        width={40}
        height={40}
        username={user?.userName}
        className="w-10 h-10 bg-secondary rounded-md mobile:w-9 flex items-center justify-center font-bold uppercase text-white"
      />
      <span className="text-sm font-bold capitalize text-foreground">
        {user?.userName}
      </span>
    </Link>
  );
};

export default UserProfile;
