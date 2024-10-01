"use client";

import { Input } from "@/components/ui/Input";
import useDebounce from "@/hooks/shared/useDebounce";
import { useTranslations } from "next-intl";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

const TableSearch = () => {
  const t = useTranslations();
  const [searchInput, setSearchInput] = useState("");
  const [_, setName] = useQueryState("name", { defaultValue: "" });
  const [__, setPage] = useQueryState(
    "pageIndex",
    parseAsInteger.withDefault(1),
  );
  const debouncedSearch = useDebounce(searchInput, 500);

  useEffect(() => {
    setName(debouncedSearch || null);
    setPage(1);
  }, [debouncedSearch, setName]);

  return (
    <Input
      type="search"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder={t("dashboard.search")}
      className="max-w-xs w-full bg-background-secondary/70 h-8"
    />
  );
};

export default TableSearch;
