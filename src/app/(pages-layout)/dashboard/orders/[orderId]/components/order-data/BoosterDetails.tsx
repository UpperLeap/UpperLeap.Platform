import Placeholder from "@/components/shared/Placeholder";
import UserAvatar from "@/components/ui/UserAvatar";
import { User } from "@/types/user";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const BoosterDetails = ({
  boosterData,
  isPaid,
}: {
  boosterData: User | null;
  isPaid: boolean;
}) => {
  const t = useTranslations();

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg p-5">
      {!boosterData && (
        <Placeholder
          size="sm"
          icon={<FaUserLarge />}
          title={t("orders.noBoosterFound")}
          description={
            isPaid
              ? t("orders.noBoosterFoundDescriptionPaid")
              : t("orders.noBoosterFoundDescriptionNotPaid")
          }
        />
      )}
      {boosterData && (
        <Link
          href={`/dashboard/booster/${boosterData?.userName}`}
          className="flex items-center gap-2 justify-between flex-wrap"
        >
          <div className="flex items-center gap-2">
            <UserAvatar
              src={boosterData?.imageUrl}
              username={boosterData?.userName}
              width={40}
              height={40}
              className="w-9 aspect-square bg-secondary rounded-full mobile:w-9 flex items-center justify-center font-bold uppercase text-white"
            />
            <p className="text-foreground font-medium">
              {boosterData?.userName}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-secondary/20 border-1 border-secondary rounded-md px-2 py-1.5 text-xs text-foreground">
            <span className="text-base">
              <MdVerified />
            </span>
            <span>{t("orders.verifiedBooster")}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default BoosterDetails;
