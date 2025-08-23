"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React, { useEffect, useState } from "react";
import Button from "@/components/shared/button";
import OtpInput from "../otp-input";
import Image from "next/image";

const KEYPAD_NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const SetPin = () => {
  const [pin, setPin] = useState("");

  const handleKeyPress = (digit: string) => {
    if (pin.length < 4) {
      setPin((prev) => prev + digit);
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div className="relative">
      <Image
        src={"/icons/arrow-left.svg"}
        alt="arrow-left icon"
        width={18}
        height={12}
        className="absolute -top-6 left-2 sm:left-0 cursor-pointer"
      />
      <AuthHeader
        title="Set pin"
        text="Create a secure 4-digit PIN for logging in and authorizing transactions"
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <div className="max-w-[250px] w-full self-center">
          <OtpInput
            onChange={(value) => setPin(value)}
            length={4}
            value={pin}
          />
        </div>

        <div className="sm:hidden flex flex-col items-center gap-4 mt-6">
          <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto w-full">
            {KEYPAD_NUMBERS.slice(0, 9).map((num) => (
              <button
                key={num}
                onClick={() => handleKeyPress(num)}
                className="max-w-[70px] w-full aspect-square rounded-full text-lg font-semibold border border-[#F0F1F2] bg-[#FAFAFA] flex items-center justify-center"
              >
                {num}
              </button>
            ))}

            <div />

            <button
              onClick={() => handleKeyPress("0")}
              className="max-w-[70px] w-full aspect-square rounded-full text-lg font-semibold border border-[#F0F1F2] bg-[#FAFAFA] flex items-center justify-center"
            >
              0
            </button>

            <button
              onClick={() => {
                if (pin.length !== 4) {
                  handleBackspace();
                } else {
                  return;
                }
              }}
              className={`transition-all duration-300 max-w-[70px] w-full aspect-square rounded-full border border-[#F0F1F2] flex items-center justify-center ${
                pin.length === 4 ? "bg-[#C791018A]" : "bg-[#FAFAFA]"
              }`}
            >
              {pin.length !== 4 ? (
                <Image
                  src={"/icons/backspace.svg"}
                  alt="backspace icon"
                  width={20}
                  height={20}
                  className="w-5 aspect-square"
                />
              ) : (
                <Image
                  src={"/icons/arrow-left.svg"}
                  alt="arrow-left icon"
                  width={20}
                  height={20}
                  className="w-5 aspect-square rotate-180"
                />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col max-md:flex-col-reverse gap-4">
          <Button
            title="Proceed"
            disabled={pin.length !== 4}
            className="max-sm:mt-auto max-sm:hidden"
          />
          <button className="text-sm font-medium text-[#C79101] underline text-center cursor-pointer">
            I will do this later! Remind me
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetPin;
