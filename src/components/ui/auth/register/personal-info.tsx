"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import AuthInput from "../input";
import Button from "@/components/shared/button";
import Image from "next/image";
import FormSelect from "@/components/shared/select";
import { constants } from "@/constants";

const PersonalInformation = () => {
  return (
    <>
      <AuthHeader
        extra="Step 2/3"
        title="Personal Information"
        text="Just a few more details to get started"
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <AuthInput
          label="Email"
          placeholder="Spacetrade@mail.com"
          icon="/icons/email.svg"
        />
        <div className="flex gap-4">
          <AuthInput
            label="First name"
            placeholder="E.g John"
            icon="/icons/user.svg"
          />
          <AuthInput
            label="Last name"
            placeholder="E.g Doe"
            icon="/icons/user.svg"
          />
        </div>
        <AuthInput
          label="Username"
          placeholder="Create a unique username"
          preseprator={
            <span className="text-xs font-medium text-[#6B7280]">@</span>
          }
        />
        <AuthInput
          label="Phone number"
          placeholder="XXXX XXXx XXX"
          preseprator={
            <div className="flex items-center gap-1">
              <Image
                src={"/icons/nigeria-flag.svg"}
                alt="nigeria-flag icon"
                width={18}
                height={18}
                className="w-4.5 h-4.5"
              />
              <span className="text-xs font-medium text-[#6B7280]">+234</span>
            </div>
          }
        />
        <FormSelect
          label="How did you hear about us? {Optional}"
          icon="/icons/megaphone.svg"
          options={constants.REFERALL}
        />
        <AuthInput
          label="Referral code {optional}"
          placeholder="Enter referral code"
          icon="/icons/gift.svg"
          extraFunction={() => {}}
          functionTitle="Apply code"
        />

        <Button title="Next" disabled className="max-sm:mt-auto" />
      </div>
    </>
  );
};

export default PersonalInformation;
