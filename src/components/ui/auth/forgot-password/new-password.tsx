"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import AuthInput from "../input";
import Button from "@/components/shared/button";
import { helpers } from "@/utils/helpers";
import Image from "next/image";
import PasswordCheck from "../register/check";
import useForgotPassword from "@/hooks/useForgotPassword";
import { useResetPasswordMutation } from "@/services/auth/authApiSlice";
import { InitiateRegisterError } from "@/types/services/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const NewPassword = () => {
  const router = useRouter();
  const { data, updateData } = useForgotPassword();
  const checks = helpers.validatePassword(data.password);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleResetPassword = async () => {
    try {
      const user = await resetPassword({
        email: data.email,
        password: data.password,
        otp: data.otp,
      }).unwrap();
      console.log({ user });
      toast.success("Password reset successfully");
      router.replace("/");
      updateData({ steps: "otp" });
    } catch (error: unknown) {
      const err = error as InitiateRegisterError;
      toast.error(err.data.message ?? "Error logging in!");
    }
  };

  return (
    <div className="relative">
      <Image
        src={"/icons/arrow-left.svg"}
        alt="arrow-left icon"
        width={18}
        height={12}
        className="absolute -top-6 sm:-top-2 left-2 sm:left-0 cursor-pointer"
        onClick={() => updateData({ steps: "otp" })}
      />
      <AuthHeader
        extra="Step 3/3"
        title="Create your new password"
        text="Enter a new password to finish resetting your account."
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <AuthInput
          label="Create Password"
          type="password"
          value={data.password}
          onChange={(e) => updateData({ password: e.target.value })}
          icon="/icons/lock.svg"
        />
        <div className="flex flex-wrap items-center gap-2">
          <PasswordCheck text="At least 8 characters" isValid={checks.length} />
          <PasswordCheck
            text="1 Capital Letter {A - Z}"
            isValid={checks.uppercase}
          />
          <PasswordCheck
            text="small letters {a - z}"
            isValid={checks.lowercase}
          />
          <PasswordCheck text="Number {0 -9}" isValid={checks.number} />
          <PasswordCheck
            text="Special character{e.g @ #}"
            isValid={checks.special}
          />
        </div>
        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Type password here"
          icon="/icons/lock.svg"
          value={data.confirm_password}
          onChange={(e) => updateData({ confirm_password: e.target.value })}
        />

        <Button
          title="Update password"
          disabled={
            !checks.uppercase ||
            !checks.length ||
            !checks.lowercase ||
            !checks.number ||
            !checks.special ||
            !data.password ||
            data.password !== data.confirm_password ||
            isLoading
          }
          loading={isLoading}
          onClick={handleResetPassword}
          className="max-sm:mt-auto"
        />
      </div>
    </div>
  );
};

export default NewPassword;
