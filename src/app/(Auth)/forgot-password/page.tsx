import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import ForgotPasswordWrapper from "@/components/ui/auth/forgot-password-wrapper";
import ForgotPasswordContext from "@/context/ForgotPasswordContext";

export default function Register() {
  return (
    <AuthLayout>
      <ForgotPasswordContext>
        <ForgotPasswordWrapper />
      </ForgotPasswordContext>
    </AuthLayout>
  );
}
