"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import UserProfile from "./UserProfile";
import DashboardTabs from "./DashboardTabs";

const DashboardNav = () => {
  const t = useTranslations();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    if (latest > previous && latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      animate={isScrolled ? "hidden" : "visible"}
      className="sticky top-[72px] mobile:top-[66px] z-[5] mobile:px-5 px-10 border-transparent before:p-px game-nav-header w-full"
    >
      <nav className="flex items-center justify-between gap-5 relative z-[1] max-w-large mx-auto mobile:justify-center">
        <UserProfile />
        <DashboardTabs />
        <div className="py-3 mobile:hidden">
          <Link
            href="/contact-us"
            className="flex items-center gap-2 bg-default px-3 text-sm py-[6px] text-foreground rounded-lg hover:bg-opacity-70 duration-300 active:scale-90"
          >
            <span>
              <IoChatbubblesOutline className="text-lg" />
            </span>
            <span>{t("gameProfile.support")}</span>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default DashboardNav;
