"use client";

import AsyncDataWrapper from "@/components/shared/AsyncDataWrapper";
import { useGet } from "@/hooks/api/useGet";
import { Order, OrdersResponse } from "@/types/order";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { BsCartX } from "react-icons/bs";
import OrdersTable from "./OrdersTable";
import TablePagination from "./filters/TablePagination";
import PageLimit from "./filters/PageLimit";

const Orders = () => {
  const t = useTranslations();
  const searchParams = useSearchParams();

  const { data, isLoading, isError, isSuccess } = useGet<OrdersResponse>({
    endpoint: `/orders?${searchParams.toString()}`,
    queryKey: ["orders", searchParams.toString()],
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
        {data && <OrdersTable orders={data.items} />}
      </AsyncDataWrapper>
      <div className="flex items-center justify-between">
        <PageLimit />
        <TablePagination totalPages={data?.totalPages || 1} />
      </div>
    </>
  );
};

export default Orders;
