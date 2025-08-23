import React from "react";
import { AuthHeaderProps } from "../../../types/components/auth";

const AuthHeader = ({ title, text, extra }: AuthHeaderProps) => {
  const handleText = (text: string) => {
    const parts = text.split(/(\*\*.+?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-black">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="w-full max-sm:bg-[#FAFAFA] max-sm:px-6 py-2.5 flex flex-col gap-1 sm:gap-0 max-sm:my-4">
      {extra && <p className="text-[#6B7280] font-medium text-xs">{extra}</p>}
      <h1 className="text-black sm:font-bold font-medium sm:text-[30px]">
        {title}
      </h1>
      <p className="text-[#6B7280] sm:text-sm text-xs">{handleText(text)}</p>
    </div>
  );
};

export default AuthHeader;
