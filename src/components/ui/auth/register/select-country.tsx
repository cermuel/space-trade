"use client";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import Button from "@/components/shared/button";
import Link from "next/link";
import { constants } from "@/constants";
import Image from "next/image";
import useOnboarding from "@/hooks/useOnboarding";

const SelectCountry = () => {
  const { data, updateData } = useOnboarding();

  return (
    <>
      <AuthHeader
        title="Select Country"
        extra="Step 1/3"
        text="To help us Personalize your experience. Kindly select 1"
      />

      <div className="flex flex-col gap-2 max-sm:px-4 w-full flex-1 my-5">
        {constants.COUNTRIES.map((country) => (
          <button
            key={country.code}
            onClick={() => updateData({ country })}
            className={`w-full p-3.5 transition-all duration-300 rounded-[10px] bg-[#FAFAFA] cursor-pointer flex items-center gap-2 border ${
              data.country === country ? "border-[#C79101]" : "border-[#F0F1F2]"
            }`}
          >
            <Image
              src={country.flag}
              alt={country.country}
              width={20}
              height={15}
              className="w-5 h-3.5"
            />
            <div>
              <h2 className="text-left text-sm font-medium">
                {country.country}{" "}
                <span className="text-xs text-[#6B7280]">{country.code}</span>
              </h2>
              <p className="text-left text-xs text-[#6B7280]">
                {country.description}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <Button
          title="Next"
          disabled={!data.country}
          className="max-sm:mt-auto"
          onClick={() => updateData({ steps: 2 })}
        />
        <p className="text-[#6B7280] text-sm font-medium text-center my-2">
          I have an account!{" "}
          <Link href={"/"} className="text-[#C79101]">
            Go to login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SelectCountry;
