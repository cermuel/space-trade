"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import AuthInput from "../input";
import Button from "@/components/shared/button";
import { helpers } from "@/utils/helpers";
import PasswordCheck from "./check";
import Image from "next/image";
import useOnboarding from "@/hooks/useOnboarding";
import { useCompleteRegisterMutation } from "@/services/auth/authApiSlice";
import toast from "react-hot-toast";
import { InitiateRegisterError } from "@/types/services/auth";

const CreatePassword = () => {
  const { data, updateData } = useOnboarding();
  const [completeRegistration, { isLoading }] = useCompleteRegisterMutation();
  const checks = helpers.validatePassword(data.password);

  const handleRegister = async () => {
    try {
      const {
        email,
        auth_id,
        password,
        otp,
        first_name,
        last_name,
        phone,
        username,
      } = data;
      const user = await completeRegistration({
        auth_id,
        email,
        otp,
        first_name,
        last_name,
        phone,
        username,
        password,
      }).unwrap();
      console.log(user);
      toast.success("Registration completed successfully!");
      updateData({ steps: "set-pin" });
    } catch (error: unknown) {
      const err = error as InitiateRegisterError;
      toast.error(err.data.message ?? "Error creating account!");
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
        onClick={() => updateData({ steps: 2 })}
      />
      <AuthHeader
        extra="Step 3/3"
        title="Create Password"
        text="Complete this form to proceed"
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <AuthInput
          label="Email"
          placeholder="Spacetrade@mail.com"
          icon="/icons/email.svg"
          value={data.email}
          readOnly
        />
        <AuthInput
          label="Password"
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
          title="Next"
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
          onClick={handleRegister}
          className="max-sm:mt-auto"
        />
      </div>
    </div>
  );
};

export default CreatePassword;
