"use client";

import { Divisions } from "@/data/valorant";
import useOrderDataStore from "@/stores/order";
import { cn } from "@/utils/utils";

const DivisionSelector = ({
  divisions,
  isDesiredRank,
}: {
  divisions: Divisions[];
  isDesiredRank: boolean;
}) => {
  const { setOrderData, currentDivision, desiredDivision } =
    useOrderDataStore();
  const divisionData = isDesiredRank ? desiredDivision : currentDivision;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {divisions.map((division) => (
        <button
          key={division.title}
          onClick={() =>
            setOrderData(
              isDesiredRank
                ? { desiredDivision: division.value }
                : { currentDivision: division.value },
            )
          }
          className={cn(
            "px-6 py-3 rounded-lg bg-background/60 hover:bg-foreground-secondary/20 duration-300 font-medium text-foreground",
            divisionData === division.value && "bg-foreground-secondary/20",
          )}
        >
          {division.title}
        </button>
      ))}
    </div>
  );
};

export default DivisionSelector;
