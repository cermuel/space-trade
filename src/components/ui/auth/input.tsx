"use client";
import React, { useState } from "react";
import { AuthInputProps } from "../../../../types/components/auth";
import Image from "next/image";

const AuthInput = ({
  label,
  onChange,
  type: inputType,
  icon,
  preseprator,
  extraFunction,
  functionTitle,
  ...rest
}: AuthInputProps) => {
  const [type, setType] = useState(inputType);
  return (
    <div className="w-full">
      <label className="text-xs font-medium text-[#6B7280]">{label}</label>
      <div className="border border-[#F0F1F2] bg-[#FAFAFA] w-full py-3.5 px-2.5 rounded-[10px] flex items-center gap-2">
        {icon && (
          <Image
            src={icon}
            alt="input icon"
            width={18}
            height={18}
            className="w-4.5 h-4.5"
          />
        )}
        {preseprator && preseprator}
        {preseprator && (
          <div className="h-[18px] w-0 border-[0.5px] border-[#D1D3D8]"></div>
        )}
        <input
          type={type}
          onChange={onChange}
          className="flex-1 outline-none autofill:bg-transparent border-0 h-full placeholder:text-[#6B7280] text-xs"
          {...rest}
        />
        {inputType === "password" && (
          <button
            onClick={() => {
              if (type === "password") {
                setType("text");
              } else {
                setType("password");
              }
            }}
            className="cursor-pointer text-[#6B7280] text-xs font-medium border border-[#F0F1F2] bg-white rounded-sm p-1"
          >
            {type === "password" ? "Show" : "Hide"}
          </button>
        )}
        {extraFunction && functionTitle && (
          <button
            onClick={extraFunction}
            className="cursor-pointer text-[#C79101] text-xs font-medium border border-[#F0F1F2] bg-white rounded-md p-1 px-2"
          >
            {functionTitle}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
