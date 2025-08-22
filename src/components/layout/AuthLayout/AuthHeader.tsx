import React from "react";
import { AuthHeaderProps } from "../../../../types/components/auth";

const AuthHeader = ({ title, text }: AuthHeaderProps) => {
  return (
    <div className="w-full max-sm:bg-[#FAFAFA] max-sm:px-6 py-2.5 flex flex-col gap-1 sm:gap-2 max-sm:my-4">
      <h1 className="text-black sm:font-bold font-medium sm:text-[30px]">
        {title}
      </h1>
      <p className="text-[#6B7280] sm:text-sm text-xs">{text}</p>
    </div>
  );
};

export default AuthHeader;
