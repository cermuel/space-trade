"use client";
import { Onboarding } from "@/types/context/auth";
import React, { ReactNode, useState } from "react";

interface OnboardingContextType {
  data: Onboarding;
  updateData: (fields: Partial<Onboarding>) => void;
}
export const OnboardingProvider = React.createContext<
  OnboardingContextType | undefined
>(undefined);

const OnboardingContext = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Onboarding>({
    email: "",
    otp: "",
    country: null,
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    referrer: "",
    password: "",
    confirm_password: "",
    pin: "",
    steps: "create-account",
    auth_id: "",
  });
  const updateData = (fields: Partial<Onboarding>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };
  return (
    <OnboardingProvider.Provider
      value={{
        data,
        updateData,
      }}
    >
      {children}
    </OnboardingProvider.Provider>
  );
};

export default OnboardingContext;
