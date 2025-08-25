import { ForgotPasswordProvider } from "@/context/ForgotPasswordContext";
import { useContext } from "react";

const useForgotPassword = () => {
  const context = useContext(ForgotPasswordProvider);
  if (context) {
    return context;
  } else {
    throw new Error(
      "useForgotPassword must be used within an ForgotPasswordProvider"
    );
  }
};

export default useForgotPassword;
