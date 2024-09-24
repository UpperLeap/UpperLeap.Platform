"use client";

import usePaymentDetails from "@/hooks/orders/usePaymentDetails";
import usePaymentUrl from "@/hooks/orders/usePaymentUrl";
import { BoostingType } from "@/types/game";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const PaymentDetails = () => {
  const t = useTranslations();
  const { details, isPending, priceData, orderPayload, orderData } =
    usePaymentDetails();
  const { mutate: getPaymentUrl, isPending: isPaymentUrlPending } =
    usePaymentUrl();

  return (
    <div className="w-full max-w-lg mobile:max-w-full">
      <h2>{t("checkout.amountDue")}</h2>
      <h3 className="text-3xl font-bold text-foreground mt-2">
        ${priceData?.total}
      </h3>
      <div className="flex items-center justify-between py-7">
        <div className="flex items-center gap-2">
          {orderData.game && (
            <Image
              src={orderData?.game?.imageUrl}
              alt={orderData?.game?.name}
              width={48}
              height={48}
              className="object-cover w-12 h-12 rounded-lg"
            />
          )}
          <div>
            <p className="text-foreground font-semibold">
              {orderData.game?.name}
            </p>
            <p className="text-foreground/50 text-sm lowercase">
              {orderData.game?.name} -{" "}
              {t(
                `checkout.boostingType.${BoostingType[orderPayload?.boostingDetails?.type]}`,
              )}
            </p>
          </div>
        </div>
        <p className="text-foreground font-semibold">${priceData?.subtotal}</p>
      </div>
      <div className="flex flex-col gap-5 py-7 border-y-1 border-foreground-secondary/20">
        {details.map((detail) => (
          <div
            key={detail.name}
            className="flex items-center justify-between font-semibold"
          >
            <p className="text-foreground/50 text-sm flex items-center gap-2">
              <span>{detail.name}</span>
              {detail.chip && (
                <span className="text-foreground/70 bg-foreground-secondary/10 text-xs rounded-sm px-2 py-px border border-foreground-secondary/30">
                  {detail.chip}
                </span>
              )}
            </p>
            <p className="text-sm">
              {detail.label}
              {detail.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between py-5 font-semibold text-xl text-foreground">
        <p>{t("checkout.total")}</p>
        <p>${priceData?.total}</p>
      </div>
      <Button
        isDisabled={isPending || isPaymentUrlPending}
        isLoading={isPending || isPaymentUrlPending}
        className="w-full text-foreground"
        color="secondary"
        radius="sm"
        onClick={() => getPaymentUrl(orderPayload)}
      >
        <span>{t("checkout.payNow")}</span>
        <span>
          <FaArrowRightLong />
        </span>
      </Button>
    </div>
  );
};

export default PaymentDetails;
