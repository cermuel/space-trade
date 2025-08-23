import { OnboardingProvider } from "@/context/OnboardingContext";
import { useContext } from "react";

const useOnboarding = () => {
  const context = useContext(OnboardingProvider);
  if (context) {
    return context;
  } else {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
};

export default useOnboarding;
