import React from "react";
import AppLayout from "@/components/layout/AppLayout/AppLayout";
import RateSection from "@/components/ui/home/rate-section";
import Wallet from "@/components/ui/home/wallet";

import Image from "next/image";
import ActionSection from "@/components/ui/home/action-section";

const Home = () => {
  return (
    <AppLayout>
      <div className="w-full">
        <Wallet />
        <RateSection />
        <ActionSection />
        <ul className="w-full overflow-x-scroll flex items-center gap-2">
          <Image
            src={"/icons/features/one.svg"}
            alt="feature img"
            width={262}
            height={67}
            className="w-[262px] h-[67px] object-cover rounded-[10px]"
          />
          <Image
            src={"/icons/features/two.svg"}
            alt="feature img"
            width={262}
            height={67}
            className="w-[262px] h-[67px] object-cover rounded-[10px]"
          />
          <Image
            src={"/icons/features/three.svg"}
            alt="feature img"
            width={262}
            height={67}
            className="w-[262px] h-[67px] object-cover rounded-[10px]"
          />
        </ul>
      </div>
    </AppLayout>
  );
};

export default Home;
