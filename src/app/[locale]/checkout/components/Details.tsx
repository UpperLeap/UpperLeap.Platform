import { Detail } from "@/hooks/orders/usePaymentDetails";
import React from "react";

const Details = ({ details }: { details: Detail[] }) => {
  return (
    <div className="flex flex-col gap-5 py-7 border-y-1 border-foreground-secondary/20">
      {details.map((detail) => (
        <div
          key={detail.name}
          className="flex items-center justify-between font-semibold"
        >
          <p className="text-foreground/50 text-sm flex items-center gap-2">
            <span>{detail.name}</span>
            {detail.chip && (
              <span className="text-foreground/70 bg-foreground-secondary/10 text-xs rounded-sm px-2 py-px border border-foreground-secondary/30">
                {detail.chip}
              </span>
            )}
          </p>
          <p className="text-sm">
            {detail.label}
            {detail.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Details;
