import { Blog } from "@/types/blog";
import { useTranslations } from "next-intl";
import { FaXTwitter } from "react-icons/fa6";
import CopyBlogUrl from "./CopyBlogUrl";
import { headers } from "next/headers";

const ShareBlog = () => {
  const t = useTranslations();
  const currentUrl = headers().get("current-url");

  return (
    <div className="flex items-center justify-between border-y-1 border-foreground-secondary/20 py-3">
      <a
        href={`https://x.com/share?text=${t("cms.checkOutThisArticle")}&url=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-foreground-secondary/10 rounded-lg hover:bg-foreground-secondary/20 duration-300 active:scale-90"
      >
        <span>
          <FaXTwitter />
        </span>
        <span>{t("cms.shareOnX")}</span>
      </a>
      <CopyBlogUrl />
    </div>
  );
};

export default ShareBlog;
