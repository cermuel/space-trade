"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import Button from "@/components/shared/button";
import OtpInput from "../otp-input";
import Image from "next/image";
import useOnboarding from "@/hooks/useOnboarding";
import Link from "next/link";
import { constants } from "@/constants";
import useLogin from "@/hooks/useLogin";

const LoginWithPin = () => {
  const { data, updateData } = useLogin();
  const pin = data.pin ?? "";

  const handleKeyPress = (digit: string) => {
    if (pin.length < 4) {
      updateData({ pin: pin + digit });
    }
  };

  const handleBackspace = () => {
    updateData({ pin: pin.slice(0, -1) });
  };

  return (
    <div className="relative">
      <AuthHeader
        icon="/images/profile.svg"
        title="Welcome back, User"
        text="Enter your pin to log in and continue trading"
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <div className="max-w-[250px] w-full self-center my-4">
          <OtpInput
            onChange={(value) => updateData({ pin: value })}
            length={4}
            value={pin}
          />
        </div>

        <div className="sm:hidden flex flex-col items-center gap-4 mt-6">
          <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto w-full">
            {constants.KEYPAD_NUMBERS.slice(0, 9).map((num) => (
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
          <Link
            href={"/"}
            className="text-sm font-medium text-[#C79101]  text-center cursor-pointer"
          >
            <span className="text-[#6B7280]">Not user? </span>Switch account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginWithPin;
