import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function BlogsLoading() {
  return (
    <section className="min-h-[63vh] relative z-[1] max-w-wide mx-auto px-5 py-10">
      <div className="w-fit mx-auto text-center mt-20">
        <Skeleton className="w-28 h-10 rounded-lg mx-auto" />
        <Skeleton className="max-w-4xl w-full h-6 rounded-lg mt-2 mx-auto" />
      </div>
      <div className="mt-20 grid grid-cols-3 gap-5 mobile:grid-cols-1 mobile:gap-x-0 mobile:gap-5">
        <div className="col-span-2 grid grid-cols-2 gap-5 mobile:grid-cols-1">
          {[0, 1, 2, 3].map((_, index) => (
            <Skeleton key={index} className="w-full h-96 rounded-lg" />
          ))}
        </div>
        <div className="col-span-1">
          <Skeleton className="w-full h-44 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
