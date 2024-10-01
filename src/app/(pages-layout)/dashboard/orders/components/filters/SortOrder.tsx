"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useTranslations } from "next-intl";
import { parseAsBoolean, useQueryState } from "nuqs";

const SortOrder = () => {
  const t = useTranslations();
  const [sortBy, setSortBy] = useQueryState("sortBy", { defaultValue: "" });
  const [isAscending, setIsAscending] = useQueryState(
    "isAscending",
    parseAsBoolean.withDefault(false),
  );

  return (
    <Select
      classNames={{
        trigger: "border-1 rounded-md",
      }}
      variant="bordered"
      placeholder={t("dashboard.sortOrder")}
      className="max-w-[130px] border-dashed bg-background-secondary/70"
      aria-label={t("dashboard.sortOrder")}
      radius="sm"
      size="sm"
      defaultSelectedKeys={sortBy && [JSON.stringify({ sortBy, isAscending })]}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value && JSON.parse(e.target.value);
        setSortBy(value?.sortBy ? value.sortBy : null);
        setIsAscending(
          typeof value?.isAscending === "boolean" ? value.isAscending : null,
        );
      }}
    >
      <SelectItem key={JSON.stringify({ sortBy: "date", isAscending: false })}>
        {t("dashboard.latest")}
      </SelectItem>
      <SelectItem key={JSON.stringify({ sortBy: "date", isAscending: true })}>
        {t("dashboard.oldest")}
      </SelectItem>
      <SelectItem key={JSON.stringify({ sortBy: "price", isAscending: true })}>
        {t("dashboard.cheapest")}
      </SelectItem>
      <SelectItem key={JSON.stringify({ sortBy: "price", isAscending: false })}>
        {t("dashboard.expensive")}
      </SelectItem>
    </Select>
  );
};

export default SortOrder;
