"use client";
import React, { useRef } from "react";
import { OtpInputProps } from "../../../../types/components/auth";

const OtpInput = ({ length = 6, onChange, value = "" }: OtpInputProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const valueArray = value.split("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = val;

    if (val && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }

    const otp = inputsRef.current.map((input) => input?.value || "").join("");
    onChange(otp);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="flex w-full justify-between gap-0 sm:gap-2">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          value={valueArray[idx] || ""}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          ref={(el) => {
            inputsRef.current[idx] = el;
          }}
          className="max-w-[50px] flex-1 aspect-square border border-[#F0F1F2] bg-[#FAFAFA] rounded-[10px] text-center text-lg focus:outline-none focus:ring-1 focus:ring-[#C79101]"
        />
      ))}
    </div>
  );
};

export default OtpInput;
