"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";

const StatusFilter = () => {
  const t = useTranslations();
  const [filters, setFilters] = useQueryState("filters", {
    defaultValue: "",
  });

  return (
    <Select
      classNames={{
        trigger: "border-1 rounded-md",
      }}
      isDisabled={true}
      variant="bordered"
      placeholder={t("dashboard.status")}
      className="max-w-[130px] border-dashed bg-background-secondary/70"
      aria-label={t("dashboard.status")}
      radius="sm"
      size="sm"
      defaultSelectedKeys={[filters]}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        setFilters(value ? value : null);
      }}
    >
      <SelectItem key={JSON.stringify({ status: 0 })}>
        {t("dashboard.pending")}
      </SelectItem>
      <SelectItem key={JSON.stringify({ status: 1 })}>
        {t("dashboard.inProgress")}
      </SelectItem>
      <SelectItem key={JSON.stringify({ status: 2 })}>
        {t("dashboard.completed")}
      </SelectItem>
    </Select>
  );
};

export default StatusFilter;
