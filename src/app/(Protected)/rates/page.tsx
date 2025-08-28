"use client";
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout/AppLayout";
import TradeCrypto from "@/components/ui/rates/crypto";
import NotReady from "@/components/shared/not-ready";

type RateCategory = "Giftcard" | "Crypto";
const RateCategories: RateCategory[] = ["Giftcard", "Crypto"];

const Rates = () => {
  const [rateCategory, setRateCategory] = useState<RateCategory>("Crypto");

  return (
    <AppLayout>
      <div className="w-full">
        <div className="w-full flex items-center p-1 rounded-[2px] bg-[#F7F7F7]">
          {RateCategories.map((cat) => (
            <button
              className={`font-medium text-xs transition-all duration-300 flex-1 h-9 cursor-pointer ${
                cat === rateCategory
                  ? "bg-[#FFF] text-[#C79101]"
                  : "text-[#6B7280]"
              }`}
              key={cat}
              onClick={() => setRateCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {rateCategory === "Crypto" && <TradeCrypto />}
        {rateCategory === "Giftcard" && <NotReady />}
      </div>
    </AppLayout>
  );
};

export default Rates;
