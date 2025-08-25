import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import React from "react";
import AuthInput from "../input";
import Button from "@/components/shared/button";
import Link from "next/link";
import useOnboarding from "@/hooks/useOnboarding";
import { useInitiateRegisterMutation } from "@/services/auth/authApiSlice";
import toast from "react-hot-toast";
import { helpers } from "@/utils/helpers";
import { InitiateRegisterError } from "@/types/services/auth";

const CreateAccount = () => {
  const [initiate, { isLoading }] = useInitiateRegisterMutation();
  const { data, updateData } = useOnboarding();

  const handleRegister = async () => {
    try {
      const user = await initiate({
        email: data.email,
      }).unwrap();
      toast.success("Account created successfully!");
      updateData({ steps: "otp", auth_id: user.id });
    } catch (error: unknown) {
      const err = error as InitiateRegisterError;
      toast.error(err.data.message ?? "Error creating account!");
    }
  };

  return (
    <>
      <AuthHeader
        title="Create Account"
        text="Let’s get you registered to SpaceTrade and start trading."
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <AuthInput
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          label="Email"
          placeholder="E.g xxxx@mail.com"
          icon="/icons/email.svg"
        />

        <Button
          title="Proceed"
          disabled={
            !data.email || isLoading || !helpers.isValidEmail(data.email)
          }
          loading={isLoading}
          className="max-sm:mt-auto"
          onClick={handleRegister}
        />
        <p className="text-[#6B7280] text-sm font-medium text-center my-2">
          I have an account!{" "}
          <Link href={"/"} className="text-[#C79101]">
            Go to login
          </Link>
        </p>
        <p className="text-[#6B7280] text-sm text-center">
          By clicking on “Proceed”, You agree to our{" "}
          <span className="text-[#C79101] underline">Terms of service</span> and{" "}
          <span className="text-[#C79101] underline">Privacy Policy</span>
        </p>
      </div>
    </>
  );
};

export default CreateAccount;
