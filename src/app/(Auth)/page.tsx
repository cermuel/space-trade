import AuthHeader from "@/components/layout/AuthLayout/AuthHeader";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import Button from "@/components/shared/button";
import AuthInput from "@/components/ui/auth/input";
import Link from "next/link";

export default function Login() {
  return (
    <AuthLayout>
      <AuthHeader
        title="Login"
        text="We’re glad to have you here again. Log into your account"
      />
      <div className="flex flex-col gap-4 max-sm:px-4 w-full flex-1 pb-4">
        <AuthInput
          label="Email"
          placeholder="E.g xxxx@mail.com"
          icon="/icons/email.svg"
        />
        <div>
          <AuthInput
            label="Password"
            placeholder="Type password here"
            icon="/icons/password.svg"
            type="password"
          />
          <Link
            href={""}
            className="text-xs font-medium text-[#6B7280] float-right my-1"
          >
            Forgot Password?
          </Link>
        </div>
        <Button title="Log in" disabled className="max-sm:mt-auto" />
        <p className="text-[#6B7280] text-sm font-medium text-center">
          I don&apos;t have an account!{" "}
          <Link href={"/register"} className="text-[#C79101]">
            Create Account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
