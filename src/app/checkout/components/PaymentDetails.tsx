"use client";

import usePaymentDetails from "@/hooks/orders/usePaymentDetails";
import usePaymentUrl from "@/hooks/orders/usePaymentUrl";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import DetailsHeader from "./DetailsHeader";
import Details from "./Details";

const PaymentDetails = () => {
  const t = useTranslations();
  const { details, isPending, priceData, orderPayload, orderData } =
    usePaymentDetails();
  const { mutate: getPaymentUrl, isPending: isPaymentUrlPending } =
    usePaymentUrl();

  return (
    <div className="w-full max-w-lg mobile:max-w-full">
      <h2>{t("checkout.amountDue")}</h2>
      {priceData && (
        <>
          <DetailsHeader priceData={priceData} orderPayload={orderPayload} />
          <Details details={details} />
        </>
      )}
      <div className="flex items-center justify-between py-5 font-semibold text-xl text-foreground">
        <p>{t("checkout.total")}</p>
        <p>${priceData?.total || 0}</p>
      </div>
      <Button
        isDisabled={isPending || isPaymentUrlPending}
        isLoading={isPending || isPaymentUrlPending}
        className="w-full text-white"
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
