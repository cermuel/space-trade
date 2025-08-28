import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F7F7F7] w-screen h-dvh flex flex-col items-center">
      <Navbar />
      <div className="max-w-[550px] w-full bg-white flex-1 px-4 sm:py-10 sm:pb-40 max-h-[calc(100dvh-80px)] overflow-y-scroll">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
