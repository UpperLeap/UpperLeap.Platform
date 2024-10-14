import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function BoosterLoading() {
  return (
    <>
      <div className="flex items-center justify-between mobile:flex-col mobile:gap-5">
        <div className="flex items-center gap-3">
          <Skeleton className="w-14 aspect-square rounded-lg" />
          <Skeleton className="w-32 h-6 rounded-md" />
        </div>
        <Skeleton className="w-40 h-8 rounded-md" />
      </div>
      <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-x-0 gap-5">
        <div className="col-span-2 flex flex-col gap-5">
          <Skeleton className="w-full h-36 rounded-md" />
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <Skeleton className="w-full h-32 rounded-md" />
        </div>
      </div>
    </>
  );
}
