import { ReactNode } from "react";

export interface AuthHeaderProps {
  title: string;
  text: string;
  extra?: string;
  icon?: string;
}

export interface AuthInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  preseprator?: ReactNode;
  extraFunction?: () => void;
  functionTitle?: string;
}

export interface OtpInputProps {
  length?: number;
  onChange: (otp: string) => void;
  value: string;
}
export interface PasswordCheckProps {
  isValid: boolean;
  text: string;
}
