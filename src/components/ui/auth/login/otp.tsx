"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React, { useEffect, useState } from "react";
import Button from "@/components/shared/button";
import OtpInput from "../otp-input";
import Image from "next/image";
import useLogin from "@/hooks/useLogin";
import { constants } from "@/constants";
import { useInitiateLoginMutation } from "@/services/auth/authApiSlice";
import { InitiateRegisterError } from "@/types/services/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginOTP = () => {
  const router = useRouter();
  const { data, updateData } = useLogin();
  const [initiate, { isLoading }] = useInitiateLoginMutation();
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const otp = data.otp;

  const handleLogin = async () => {
    try {
      const user = await initiate({
        email: data.email,
        password: data.password,
      }).unwrap();
      updateData({ steps: "otp", auth_id: user.id });
      toast.success("Login successfully");
      router.replace("/home");
    } catch (error: unknown) {
      const err = error as InitiateRegisterError;
      toast.error(err.data.message ?? "Error logging in!");
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
  };

  const handleKeyPress = (digit: string) => {
    if (otp.length < 6) {
      updateData({ otp: otp + digit });
    }
  };

  const handleBackspace = () => {
    updateData({ otp: otp.slice(0, -1) });
  };

  return (
    <div className="relative">
      <Image
        src={"/icons/arrow-left.svg"}
        alt="arrow-left icon"
        width={18}
        height={12}
        className="absolute -top-6 left-2 sm:left-0 cursor-pointer"
        onClick={() => updateData({ steps: "login" })}
      />
      <AuthHeader
        title="OTP verification"
        text={`A 6-digit OTP code was sent to **${data.email}.** Input it below to continue`}
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <OtpInput
          onChange={(value) => updateData({ otp: value })}
          length={6}
          value={otp}
        />
        {canResend ? (
          <button
            onClick={handleResend}
            className="hover:underline text-sm font-medium text-[#C79101] underline text-center cursor-pointer"
          >
            Resend OTP
          </button>
        ) : (
          <p className="text-sm font-medium text-[#6B7280] text-center">
            Resend OTP{" "}
            <span className="text-[#C79101] text-center">
              00:{timer.toString().padStart(2, "0")}
            </span>
          </p>
        )}

        <div className="sm:hidden flex flex-col items-center gap-4 mt-6">
          <button
            onClick={async () => {
              const text = await navigator.clipboard.readText();
              if (text.length === 6 && !isNaN(Number(text))) {
                updateData({ otp: text });
              }
            }}
            className="flex items-center gap-1 bg-[#FAFAFA] p-2 rounded-[10px] border border-[#F0F1F2] cursor-pointer text-xs font-medium text-[#6B7280]"
          >
            <Image
              src={"/icons/paste.svg"}
              alt="paste icon"
              width={14}
              height={14}
              className="w-3.5 aspect-square"
            />
            Paste OTP
          </button>
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
                if (otp.length !== 6) {
                  handleBackspace();
                } else {
                  handleLogin();
                }
              }}
              className={`transition-all duration-300 max-w-[70px] w-full aspect-square rounded-full border border-[#F0F1F2] flex items-center justify-center ${
                otp.length === 6 ? "bg-[#C791018A]" : "bg-[#FAFAFA]"
              }`}
            >
              {otp.length !== 6 ? (
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

        <Button
          title="Proceed"
          onClick={handleLogin}
          disabled={otp.length !== 6 || isLoading}
          loading={isLoading}
          className="max-sm:mt-auto max-sm:hidden"
        />
      </div>
    </div>
  );
};

export default LoginOTP;
