import React from "react";
import { PasswordCheckProps } from "../../../../../types/components/auth";
import Image from "next/image";

const PasswordCheck = ({ isValid, text }: PasswordCheckProps) => {
  return (
    <div
      className={`flex items-center gap-1 border text-[10px] font-medium p-1.5 rounded-[10px] ${
        isValid
          ? "bg-[#E9F9EF] border-[#E9F9EF] text-[#0E5327]"
          : "bg-[#FAFAFA] border-[#F0F1F2] text-[#6B7280]"
      }`}
    >
      <Image
        width={12}
        height={12}
        className="w-3 h-3"
        alt="check icon"
        src={isValid ? "/icons/check.svg" : "/icons/check-grey.svg"}
      />
      <span>{text}</span>
    </div>
  );
};

export default PasswordCheck;
