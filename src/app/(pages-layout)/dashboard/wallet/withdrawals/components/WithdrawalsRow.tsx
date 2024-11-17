import { Withdrawal } from "@/types/wallet";
import { formatDate } from "@/utils/utils";
import WithdrawalStatusChip from "./WithdrawalStatusChip";
import RejectionReasonModal from "./RejectionReasonModal";
import CancelRequestModal from "./CancelRequestModal";

const WithdrawalsRow = ({ withdrawal }: { withdrawal: Withdrawal }) => {
  return (
    <tr className="border-b-1 border-foreground-secondary/10 flex w-full min-w-fit items-center py-3 last:border-b-0 text-sm">
      <td className="ellipsis w-[150px] flex-grow px-4">
        #{withdrawal?.id?.slice(0, 12)}
      </td>
      <td className="ellipsis w-[100px] flex-grow px-4">{withdrawal.amount}</td>
      <td className="ellipsis w-[100px] flex-grow px-4">
        <WithdrawalStatusChip
          isCompleted={withdrawal.isCompleted}
          isRejected={withdrawal.isRejected}
        />
      </td>
      <td className="ellipsis w-[150px] flex-grow px-4">
        {formatDate(withdrawal.updatedDate, "en-US")}
      </td>
      {withdrawal.isRejected && (
        <td className="ellipsis w-[150px] flex-grow px-4">
          <RejectionReasonModal reason={withdrawal.rejectionReason} />
        </td>
      )}
      {!withdrawal.isRejected && !withdrawal.isCompleted && (
        <td className="ellipsis w-[150px] flex-grow px-4">
          <CancelRequestModal withdrawalId={withdrawal.id} />
        </td>
      )}
      {withdrawal.isCompleted && (
        <td className="ellipsis w-[150px] flex-grow px-4">__</td>
      )}
    </tr>
  );
};

export default WithdrawalsRow;
