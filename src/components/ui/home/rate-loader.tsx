import Skeleton from "@/components/shared/skeleton-loader";
import React from "react";

const RateLoader = () => {
  return (
    <ul className="flex overflow-x-hidden gap-5 items-center scroll-smooth no-scrollbar mt-2">
      {[1, 2, 3].map((idx) => (
        <Skeleton key={idx} className="w-[193px] h-[50px] rounded-[10px]" />
      ))}
    </ul>
  );
};

export default RateLoader;
