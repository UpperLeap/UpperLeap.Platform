"use client";

import AsyncDataWrapper from "@/components/shared/AsyncDataWrapper";
import { useGet } from "@/hooks/api/useGet";
import { OrdersResponse } from "@/types/order";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BsCartX } from "react-icons/bs";
import PageLimit from "../../orders/components/filters/PageLimit";
import TablePagination from "../../orders/components/filters/TablePagination";
import OrderCard from "./OrderCard";

const Orders = ({ initialOrders }: { initialOrders: OrdersResponse }) => {
  const t = useTranslations();
  const searchParams = useSearchParams();

  const { data, isLoading, isError, isSuccess } = useGet<OrdersResponse>({
    endpoint: `/boosting/orders?${searchParams.toString()}`,
    queryKey: ["boosting-orders", searchParams.toString()],
    queryOptions: {
      staleTime: 0,
      initialData: initialOrders,
    },
  });

  return (
    <>
      <AsyncDataWrapper
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        isEmpty={data && data?.items?.length === 0}
        placeholderIcon={<BsCartX />}
        placeholderTitle={t("dashboard.noOrders")}
        placeholderDescription={t("dashboard.noOrdersDescription")}
      >
        {data && (
          <div
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(335px, 1fr))",
            }}
            className="gap-5 grid"
          >
            {data.items.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </AsyncDataWrapper>
      <div className="flex items-center justify-between">
        <PageLimit />
        <TablePagination totalPages={data?.totalPages || 1} />
      </div>
    </>
  );
};

export default Orders;
