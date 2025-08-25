import type { Rate } from "@/types/components/home";
import Image from "next/image";
import React from "react";

const Rate = ({ rate }: { rate: Rate }) => {
  return (
    <li className="w-[193px] shrink-0 h-[50px] bg-[#f7f7f7] border border-[#F0F1F2] rounded-[10px] flex items-center justify-between px-2.5 py-2">
      <div className="flex items-center gap-1">
        <Image
          src={rate.icon}
          alt={rate.code}
          className="w-6 h-6 aspect-square"
          width={24}
          height={24}
        />
        <div className="space-y-0.5">
          <p className="text-xs font-medium text-[#2D3036]">{rate.name}</p>
          <p className="flex text-[#6B7280] text-[10px]">
            ${Number(rate.usd_rate).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="h-full gap-0.5 flex">
        <div className="w-0 h-full border border-[#F0F1F2]"></div>
        <div className="w-0 h-full border border-[#F0F1F2]"></div>
      </div>
      <div className="space-y-0.5">
        <p className="flex text-[#6B7280] text-[10px]">Our rate:</p>
        <p className="text-xs font-medium text-[#2D3036]">
          ₦{rate.naira_rate}/$
        </p>
      </div>
    </li>
  );
};

export default Rate;
