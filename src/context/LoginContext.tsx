"use client";
import { Login } from "@/types/context/auth";
import React, { ReactNode, useState } from "react";

interface LoginContextType {
  data: Login;
  updateData: (fields: Partial<Login>) => void;
}
export const LoginProvider = React.createContext<LoginContextType | undefined>(
  undefined
);

const LoginContext = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Login>({
    email: "",
    otp: "",
    password: "",
    steps: "login",
    pin: "",
    auth_id: "",
  });
  const updateData = (fields: Partial<Login>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };
  return (
    <LoginProvider.Provider
      value={{
        data,
        updateData,
      }}
    >
      {children}
    </LoginProvider.Provider>
  );
};

export default LoginContext;
