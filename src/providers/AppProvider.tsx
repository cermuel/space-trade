"use client";
import React from "react";
import ReduxProvider from "./ReduxProvider";
import { Toaster } from "react-hot-toast";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <Toaster position="top-right" />
      {children}
    </ReduxProvider>
  );
};

export default AppProvider;
