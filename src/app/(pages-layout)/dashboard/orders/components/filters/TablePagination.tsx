"use client";

import { useQueryState, parseAsInteger } from "nuqs";
import { Pagination } from "@nextui-org/pagination";

const TablePagination = ({ totalPages }: { totalPages: number }) => {
  const [page, setPage] = useQueryState(
    "pageIndex",
    parseAsInteger.withDefault(1),
  );

  return (
    <Pagination
      radius="sm"
      classNames={{
        item: "border-1 text-sm rounded-md bg-transparent border-foreground-secondary/20",
        cursor: "border-1 text-sm rounded-md bg-transparent",
        next: "border-1 text-sm rounded-md bg-transparent border-foreground-secondary/20",
        prev: "border-1 text-sm rounded-md bg-transparent border-foreground-secondary/20",
      }}
      showControls
      total={totalPages}
      className="self-end"
      initialPage={page}
      page={page}
      onChange={(page) => setPage(page)}
    />
  );
};

export default TablePagination;
