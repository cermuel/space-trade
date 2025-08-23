"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import AuthInput from "../input";
import Button from "@/components/shared/button";
import Image from "next/image";
import FormSelect from "@/components/shared/select";
import { constants } from "@/constants";
import useOnboarding from "@/hooks/useOnboarding";

const PersonalInformation = () => {
  const { data, updateData } = useOnboarding();
  return (
    <div className="relative">
      <Image
        src={"/icons/arrow-left.svg"}
        alt="arrow-left icon"
        width={18}
        height={12}
        className="absolute -top-6 sm:-top-2 left-2 sm:left-0 cursor-pointer"
        onClick={() => updateData({ steps: 1 })}
      />
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
          value={data.email}
          readOnly
        />
        <div className="flex gap-4">
          <AuthInput
            label="First name"
            placeholder="E.g John"
            icon="/icons/user.svg"
            value={data.first_name}
            onChange={(e) => updateData({ first_name: e.target.value })}
          />
          <AuthInput
            label="Last name"
            placeholder="E.g Doe"
            icon="/icons/user.svg"
            value={data.last_name}
            onChange={(e) => updateData({ last_name: e.target.value })}
          />
        </div>
        <AuthInput
          label="Username"
          placeholder="Create a unique username"
          preseprator={
            <span className="text-xs font-medium text-[#6B7280]">@</span>
          }
          value={data.username}
          onChange={(e) => updateData({ username: e.target.value })}
        />
        <AuthInput
          label="Phone number"
          placeholder="XXXX XXXX XXX"
          preseprator={
            <div className="flex items-center gap-1">
              <Image
                src={data.country?.flag ?? ""}
                alt="flag icon"
                width={18}
                height={18}
                className="w-4.5 h-4.5"
              />
              <span className="text-xs font-medium text-[#6B7280]">
                {data.country?.code}
              </span>
            </div>
          }
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
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
          value={data.referrer ?? ""}
          onChange={(e) => updateData({ referrer: e.target.value })}
        />

        <Button
          title="Next"
          disabled={
            !data.email ||
            !data.first_name ||
            !data.last_name ||
            !data.username ||
            !data.phone
          }
          onClick={() => updateData({ steps: 3 })}
          className="max-sm:mt-auto"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
