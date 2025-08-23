import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import CreateAccount from "@/components/ui/auth/register/create-account";
import CreatePassword from "@/components/ui/auth/register/create-password";
import RegisterOTP from "@/components/ui/auth/register/otp";
import PersonalInformation from "@/components/ui/auth/register/personal-info";
import SetPin from "@/components/ui/auth/register/pin";
import SelectCountry from "@/components/ui/auth/register/select-country";

export default function Register() {
  return (
    <AuthLayout>
      {/* <CreateAccount /> */}
      {/* <RegisterOTP /> */}
      {/* <SelectCountry /> */}
      {/* <PersonalInformation /> */}
      {/* <CreatePassword /> */}
      <SetPin />
    </AuthLayout>
  );
}
