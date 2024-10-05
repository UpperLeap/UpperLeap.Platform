"use client";

import Placeholder from "@/components/shared/Placeholder";
import { Credential } from "@/types/order";
import { useTranslations } from "next-intl";
import { FaFingerprint } from "react-icons/fa6";
import Credentials from "./Credentials";
import { FaPlus } from "react-icons/fa6";
import { RiEdit2Line } from "react-icons/ri";
import AddCredentialsSheet from "../AddCredentialsSheet";
import { useGet } from "@/hooks/api/useGet";
import { useParams } from "next/navigation";
import { Skeleton } from "@nextui-org/skeleton";

const OrderCredentialsCard = () => {
  const t = useTranslations();
  const { orderId } = useParams();

  const {
    data: orderCredentials,
    refetch,
    isLoading,
  } = useGet<Credential>({
    endpoint: `/orders/${orderId}/credentials`,
    queryKey: [`${orderId}-credentials`],
  });

  if (isLoading) return <Skeleton className="h-[200px] w-full rounded-lg" />;

  return (
    <div className="bg-background-secondary/70 border-1 border-foreground-secondary/10 rounded-lg">
      <div className="px-5">
        {!orderCredentials && (
          <div className="py-5">
            <Placeholder
              size="sm"
              icon={<FaFingerprint />}
              title={t("orders.noCredentialsProvided")}
              description={t("orders.noCredentialsProvidedDescription")}
            />
          </div>
        )}
        {orderCredentials && (
          <Credentials orderCredentials={orderCredentials} />
        )}
      </div>
      <div className="p-3 border-t-1 border-foreground-secondary/10 flex items-center justify-end">
        <AddCredentialsSheet
          orderCredentials={orderCredentials}
          refetch={refetch}
        >
          <div className="flex items-center gap-2 text-foreground text-sm hover:bg-foreground-secondary/10 transition-all duration-300 cursor-pointer w-fit px-2 py-1 rounded-md">
            <span>{orderCredentials ? <RiEdit2Line /> : <FaPlus />}</span>
            <span>
              {orderCredentials
                ? t("orders.editCredentials")
                : t("orders.addCredentials")}
            </span>
          </div>
        </AddCredentialsSheet>
      </div>
    </div>
  );
};

export default OrderCredentialsCard;
