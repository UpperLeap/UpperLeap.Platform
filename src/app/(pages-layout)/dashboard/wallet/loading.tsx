import { Skeleton } from "@nextui-org/skeleton";

export default function TransactionsLoading() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <Skeleton className="w-32 h-8 rounded-md" />
            <Skeleton className="w-48 h-8 rounded-md" />
          </div>
          <Skeleton className="w-full h-60 rounded-md" />
          <div className="flex items-center justify-between">
            <Skeleton className="w-48 h-8 rounded-md" />
            <Skeleton className="w-32 h-8 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
}
