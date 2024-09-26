"use client";

import useOrderDataStore from "@/stores/order";
import { useTranslations } from "next-intl";
import Image from "next/image";

const RankChip = ({ isDesired = false }: { isDesired?: boolean }) => {
  const t = useTranslations();
  const { currentRank, desiredRank, currentDivision, desiredDivision } =
    useOrderDataStore();
  const rank = isDesired ? desiredRank : currentRank;
  const division = isDesired ? desiredDivision : currentDivision;

  return (
    <>
      {rank.name && (
        <div className="flex items-center gap-1 text-sm">
          <Image src={rank?.image} alt={rank?.name} width={20} height={20} />
          <span>{t(rank?.name)}</span>
          {rank.isDivisionsVisible && <span>{division}</span>}
        </div>
      )}
    </>
  );
};

export default RankChip;
