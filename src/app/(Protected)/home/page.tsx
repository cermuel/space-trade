import React from "react";
import AppLayout from "@/components/layout/AppLayout/AppLayout";
import RateSection from "@/components/ui/home/rate-section";
import Wallet from "@/components/ui/home/wallet";
import ActionSection from "@/components/ui/home/action-section";
import PromotionSection from "@/components/ui/home/promotion-section";

const Home = () => {
  return (
    <AppLayout>
      <div className="w-full">
        <Wallet />
        <RateSection />
        <ActionSection />
        <PromotionSection />
      </div>
    </AppLayout>
  );
};

export default Home;
