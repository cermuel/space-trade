export interface AuthHeaderProps {
  title: string;
  text: string;
}

export interface AuthInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
}

export interface OtpInputProps {
  length?: number;
  onChange: (otp: string) => void;
}
