import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import OnboardingWrapper from "@/components/ui/auth/onboarding-wrapper";
import OnboardingContext from "@/context/OnboardingContext";

export default function Register() {
  return (
    <AuthLayout>
      <OnboardingContext>
        <OnboardingWrapper />
      </OnboardingContext>
    </AuthLayout>
  );
}
