import { LoginProvider } from "@/context/LoginContext";
import { useContext } from "react";

const useLogin = () => {
  const context = useContext(LoginProvider);
  if (context) {
    return context;
  } else {
    throw new Error("useLogin must be used within an LoginProvider");
  }
};

export default useLogin;
