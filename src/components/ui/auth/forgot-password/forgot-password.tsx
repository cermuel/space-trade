import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import AuthInput from "../input";
import Button from "@/components/shared/button";
import Link from "next/link";
import useForgotPassword from "@/hooks/useForgotPassword";
import Image from "next/image";
import { useForgotPasswordMutation } from "@/services/auth/authApiSlice";
import { InitiateRegisterError } from "@/types/services/auth";
import toast from "react-hot-toast";

const InitiateForgotPassword = () => {
  const { data, updateData } = useForgotPassword();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleForgotPassword = async () => {
    try {
      const user = await forgotPassword({
        email: data.email,
      }).unwrap();
      console.log({ user });
      updateData({ steps: "otp" });
    } catch (error: unknown) {
      const err = error as InitiateRegisterError;
      toast.error(err.data.message ?? "Error logging in!");
    }
  };

  return (
    <div className="relative">
      <Link href={"/"}>
        <Image
          src={"/icons/arrow-left.svg"}
          alt="arrow-left icon"
          width={18}
          height={12}
          className="absolute -top-6 left-2 sm:left-0 cursor-pointer"
        />
      </Link>
      <AuthHeader
        title="Forgot password"
        text="Enter your email to reset it."
        extra="Step 1/2"
      />

      <div className="flex flex-col gap-6 max-sm:px-4 w-full flex-1 mt-2">
        <AuthInput
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          label="Email"
          placeholder="E.g xxxx@mail.com"
          icon="/icons/email.svg"
        />

        <Button
          title="Proceed"
          disabled={!data.email || isLoading}
          loading={isLoading}
          className="max-sm:mt-auto"
          onClick={handleForgotPassword}
        />
      </div>
    </div>
  );
};

export default InitiateForgotPassword;
