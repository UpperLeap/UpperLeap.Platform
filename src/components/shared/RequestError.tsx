import { useTranslations } from "next-intl";
import Link from "next/link";
import { MdOutlineErrorOutline } from "react-icons/md";

const RequestError = () => {
  const t = useTranslations();

  return (
    <div className="mx-auto w-fit text-center capitalize">
      <MdOutlineErrorOutline className="mx-auto mb-2 text-5xl text-red-500" />
      <p className="mb-5 max-w-[400px] text-xl dark:text-white">
        {t("errors.requestError")}
      </p>
      <Link
        href="/"
        className="rounded-lg bg-secondary px-4 py-2 text-white duration-300 active:scale-95 hover:opacity-85"
      >
        {t("errors.backToHome")}
      </Link>
    </div>
  );
};

export default RequestError;
