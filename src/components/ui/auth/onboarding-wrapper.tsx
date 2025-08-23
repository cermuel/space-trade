"use client";
import React from "react";
import CreateAccount from "@/components/ui/auth/register/create-account";
import CreatePassword from "@/components/ui/auth/register/create-password";
import RegisterOTP from "@/components/ui/auth/register/otp";
import PersonalInformation from "@/components/ui/auth/register/personal-info";
import SetPin from "@/components/ui/auth/register/pin";
import SelectCountry from "@/components/ui/auth/register/select-country";
import useOnboarding from "@/hooks/useOnboarding";

const OnboardingWrapper = () => {
  const { data } = useOnboarding();
  const steps = data.steps;
  return (
    <>
      {steps === "create-account" ? (
        <CreateAccount />
      ) : steps === "otp" ? (
        <RegisterOTP />
      ) : steps === 1 ? (
        <SelectCountry />
      ) : steps === 2 ? (
        <PersonalInformation />
      ) : steps === 3 ? (
        <CreatePassword />
      ) : steps === "set-pin" ? (
        <SetPin />
      ) : null}
    </>
  );
};

export default OnboardingWrapper;
