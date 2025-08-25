"use client";
import React from "react";
import useLogin from "@/hooks/useLogin";
import InitiateLogin from "./login/login";
import LoginOTP from "./login/otp";
import LoginWithPin from "./login/pin";

const LoginWrapper = () => {
  const { data } = useLogin();
  const steps = data.steps;
  return (
    <>
      {steps === "login" ? (
        <InitiateLogin />
      ) : steps === "otp" ? (
        <LoginOTP />
      ) : steps === "pin" ? (
        <LoginWithPin />
      ) : null}
    </>
  );
};

export default LoginWrapper;
