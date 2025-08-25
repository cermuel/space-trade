import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import LoginWrapper from "@/components/ui/auth/login-wrapper";
import LoginContext from "@/context/LoginContext";

export default function Login() {
  return (
    <AuthLayout>
      <LoginContext>
        <LoginWrapper />
      </LoginContext>
    </AuthLayout>
  );
}
