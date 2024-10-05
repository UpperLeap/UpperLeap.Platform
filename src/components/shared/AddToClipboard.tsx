"use client";

import { cn } from "@/utils/utils";
import { Tooltip } from "@nextui-org/tooltip";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const AddToClipboard = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const t = useTranslations();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopied) return;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <Tooltip
      placement="top"
      size="sm"
      classNames={{
        content: "rounded-md",
      }}
      content={isCopied ? t("common.copied") : t("common.copyToClipboard")}
    >
      <button
        className={cn(
          "text-foreground-secondary hover:bg-foreground-secondary/20 duration-300 rounded-full p-1",
          className,
        )}
        onClick={handleCopy}
      >
        {isCopied ? <FaCheck /> : <FaRegCopy />}
      </button>
    </Tooltip>
  );
};

export default AddToClipboard;
