import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F7F7F7] w-screen min-h-dvh flex flex-col items-center">
      <Navbar />
      <div className="max-w-[550px] w-full bg-white flex-1 px-4 sm:py-10">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
