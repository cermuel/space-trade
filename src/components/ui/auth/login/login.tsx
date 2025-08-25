"use client";
import React from "react";
import Button from "@/components/shared/button";
import AuthInput from "@/components/ui/auth/input";
import Link from "next/link";
import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import useLogin from "@/hooks/useLogin";
import { useInitiateLoginMutation } from "@/services/auth/authApiSlice";
import toast from "react-hot-toast";
import { InitiateRegisterError } from "@/types/services/auth";

const InitiateLogin = () => {
  const { data, updateData } = useLogin();
  const [initiate, { isLoading }] = useInitiateLoginMutation();

  const handleLogin = async () => {
    try {
      const user = await initiate({
        email: data.email,
        password: data.password,
      }).unwrap();
      updateData({ steps: "otp", auth_id: user.id });
    } catch (error: unknown) {
      const err = error as InitiateRegisterError;
      toast.error(err.data.message ?? "Error logging in!");
    }
  };

  return (
    <>
      <AuthHeader
        title="Login"
        text="We’re glad to have you here again. Log into your account"
      />
      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1 pb-4">
        <AuthInput
          label="Email"
          placeholder="E.g xxxx@mail.com"
          icon="/icons/email.svg"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
        />
        <div>
          <AuthInput
            label="Password"
            placeholder="Type password here"
            icon="/icons/password.svg"
            type="password"
            value={data.password}
            onChange={(e) => updateData({ password: e.target.value })}
          />
          <Link
            href={"/forgot-password"}
            className="text-xs font-medium text-[#6B7280] float-right my-1"
          >
            Forgot Password?
          </Link>
        </div>
        <Button
          title="Log in"
          disabled={!data.email || !data.password || isLoading}
          loading={isLoading}
          onClick={handleLogin}
          className="max-sm:mt-auto"
        />
        <p className="text-[#6B7280] text-sm font-medium text-center">
          I don&apos;t have an account!{" "}
          <Link href={"/register"} className="text-[#C79101]">
            Create Account
          </Link>
        </p>
      </div>
    </>
  );
};

export default InitiateLogin;
