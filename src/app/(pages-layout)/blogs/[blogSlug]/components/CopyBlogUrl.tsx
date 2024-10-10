"use client";

import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaCheck, FaLink } from "react-icons/fa6";

const CopyBlogUrl = () => {
  const t = useTranslations();
  const [isCopied, setIsCopied] = useState(false);
  const currentUrl =
    typeof window !== "undefined" ? window?.location?.href : null;

  const handleCopyLink = () => {
    if (isCopied || !currentUrl) return;
    setIsCopied(true);
    navigator.clipboard.writeText(currentUrl);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <button
      className={cn(
        "flex items-center gap-2 px-4 py-2 bg-foreground-secondary/10 rounded-lg hover:bg-foreground-secondary/20 duration-300 active:scale-90",
        isCopied && "text-green-500",
      )}
      onClick={handleCopyLink}
    >
      <span>{isCopied ? <FaCheck /> : <FaLink />}</span>
      <span>{isCopied ? t("cms.copiedToClipboard") : t("cms.copyLink")}</span>
    </button>
  );
};

export default CopyBlogUrl;
