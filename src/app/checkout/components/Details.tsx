import { Detail } from "@/hooks/orders/usePaymentDetails";
import { Tooltip } from "@nextui-org/tooltip";
import { FaInfoCircle } from "react-icons/fa";

const Details = ({ details }: { details: Detail[] }) => {
  return (
    <div className="flex flex-col gap-5 py-7 border-y-1 border-foreground-secondary/20">
      {details.map((detail) => (
        <div
          key={detail.name}
          className="flex items-center justify-between font-semibold"
        >
          <div className="text-foreground/50 text-sm flex items-center gap-2 relative">
            <span>{detail.name}</span>
            {detail.chip && (
              <span className="text-foreground/70 bg-foreground-secondary/10 text-xs rounded-sm px-2 py-px border border-foreground-secondary/30">
                {detail.chip}
              </span>
            )}
            {detail.tooltip && (
              <div className="relative">
                <Tooltip
                  content={detail.tooltip}
                  radius="sm"
                  placement="right"
                  className="max-w-[250px] text-xs"
                >
                  <div>
                    <FaInfoCircle />
                  </div>
                </Tooltip>
              </div>
            )}
          </div>
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
