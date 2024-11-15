import Image from "next/image";
import React from "react";
import logo from "../../../public/logoipsum.svg";
import { cn } from "@/utils/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={logo}
      alt="logo"
      // loading="lazy"
      priority={true}
      className={cn("max-w-[160px] mobile:max-w-[140px] w-full", className)}
    />
  );
};

export default Logo;
