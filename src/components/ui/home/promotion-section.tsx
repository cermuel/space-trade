"use client";
import { constants } from "@/constants";
import { useGetAppQuery } from "@/services/app/appApiSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PromotionSection = () => {
  const router = useRouter();
  const { data } = useGetAppQuery({});
  const app = data ?? constants.DUMMY_APP;
  return (
    <ul className="w-full overflow-x-scroll flex items-center gap-2">
      {app.promotions.map((promotion) => (
        <Image
          key={promotion.id}
          src={promotion.banner_url}
          alt={promotion.title}
          width={262}
          height={67}
          className="w-[262px] h-[67px] object-cover rounded-[10px] cursor-pointer"
          priority
          fetchPriority="high"
          onClick={() => router.push(`/${promotion.promotion_url}`)}
        />
      ))}
    </ul>
  );
};

export default PromotionSection;
