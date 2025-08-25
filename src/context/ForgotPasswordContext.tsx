"use client";
import { ForgotPassword } from "@/types/context/auth";
import React, { ReactNode, useState } from "react";

interface ForgotPasswordContextType {
  data: ForgotPassword;
  updateData: (fields: Partial<ForgotPassword>) => void;
}
export const ForgotPasswordProvider = React.createContext<
  ForgotPasswordContextType | undefined
>(undefined);

const ForgotPasswordContext = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ForgotPassword>({
    email: "",
    otp: "",
    password: "",
    steps: "forgot-password",
    confirm_password: "",
  });
  const updateData = (fields: Partial<ForgotPassword>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };
  return (
    <ForgotPasswordProvider.Provider
      value={{
        data,
        updateData,
      }}
    >
      {children}
    </ForgotPasswordProvider.Provider>
  );
};

export default ForgotPasswordContext;
