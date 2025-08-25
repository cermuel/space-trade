"use client";
import React from "react";
import useForgotPassword from "@/hooks/useForgotPassword";
import InitiateForgotPassword from "./forgot-password/forgot-password";
import ForgotPasswordOTP from "./forgot-password/otp";
import NewPassword from "./forgot-password/new-password";

const ForgotPasswordWrapper = () => {
  const { data } = useForgotPassword();
  const steps = data.steps;
  return (
    <>
      {steps === "forgot-password" ? (
        <InitiateForgotPassword />
      ) : steps === "otp" ? (
        <ForgotPasswordOTP />
      ) : steps === "new-password" ? (
        <NewPassword />
      ) : null}
    </>
  );
};

export default ForgotPasswordWrapper;
