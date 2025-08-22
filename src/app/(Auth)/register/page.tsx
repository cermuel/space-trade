import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import Button from "@/components/shared/button";
import AuthInput from "@/components/ui/auth/input";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <AuthLayout>
      <AuthHeader
        title="Create Account"
        text="Let’s get you registered to SpaceTrade and start trading."
      />

      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1">
        <AuthInput
          label="Email"
          placeholder="E.g xxxx@mail.com"
          icon="/icons/email.svg"
        />

        <Button title="Proceed" disabled className="max-sm:mt-auto" />
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
    </AuthLayout>
  );
}
