import React from "react";
import TableSearch from "./filters/TableSearch";
import StatusFilter from "./filters/StatusFilter";
import SortOrder from "./filters/SortOrder";

const TableFilters = () => {
  return (
    <div className="flex items-center justify-between gap-5 flex-wrap">
      <div className="flex items-center gap-3 flex-grow">
        <TableSearch />
        <StatusFilter />
      </div>
      <SortOrder />
    </div>
  );
};

export default TableFilters;
