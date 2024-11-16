"use client";

import AsyncDataWrapper from "@/components/shared/AsyncDataWrapper";
import { useGet } from "@/hooks/api/useGet";
import { Wallet } from "@/types/wallet";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import TransactionsTable from "./TransactionsTable";
import PageLimit from "../../orders/components/filters/PageLimit";
import TablePagination from "../../orders/components/filters/TablePagination";
import { IoSwapVertical } from "react-icons/io5";

const Transactions = ({ walletData }: { walletData: Wallet }) => {
  const t = useTranslations();
  const searchParams = useSearchParams();

  const { data, isLoading, isError, isSuccess } = useGet<Wallet>({
    endpoint: `/authentication/me/wallet?${searchParams.toString()}`,
    queryKey: ["wallet", searchParams.toString()],
    queryOptions: {
      staleTime: 0,
      initialData: walletData,
    },
  });

  return (
    <>
      <AsyncDataWrapper
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        isEmpty={data && data?.paginatedTransactions?.items?.length === 0}
        placeholderIcon={<IoSwapVertical />}
        placeholderTitle={t("transactions.noTransactions")}
        placeholderDescription={t("transactions.noTransactionsDescription")}
      >
        {data && (
          <TransactionsTable
            transactions={data?.paginatedTransactions?.items}
          />
        )}
      </AsyncDataWrapper>
      <div className="flex items-center justify-between">
        <PageLimit />
        <TablePagination
          totalPages={data?.paginatedTransactions?.totalPages || 1}
        />
      </div>
    </>
  );
};

export default Transactions;
