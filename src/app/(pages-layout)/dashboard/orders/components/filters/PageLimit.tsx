import { Select, SelectItem } from "@nextui-org/select";
import { useTranslations } from "next-intl";
import { parseAsInteger, useQueryState } from "nuqs";

const PageLimit = () => {
  const t = useTranslations();
  const [pageSize, setPageSize] = useQueryState("pageSize", {
    defaultValue: "10",
  });

  return (
    <Select
      classNames={{
        trigger: "border-1 rounded-md",
      }}
      disallowEmptySelection
      variant="bordered"
      placeholder={t("dashboard.pageSize")}
      className="max-w-[120px] border-dashed bg-background-secondary/70"
      aria-label={t("dashboard.pageSize")}
      radius="sm"
      size="sm"
      defaultSelectedKeys={[pageSize]}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setPageSize(value ? value : null);
      }}
    >
      <SelectItem key="5">5</SelectItem>
      <SelectItem key="10">10</SelectItem>
      <SelectItem key="15">15</SelectItem>
      <SelectItem key="20">20</SelectItem>
    </Select>
  );
};

export default PageLimit;
