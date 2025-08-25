import { Country } from "../constants";

export interface Onboarding {
  steps: 1 | 2 | 3 | "create-account" | "otp" | "set-pin";
  email: string;
  otp: string;
  country: Country | null;
  first_name: string;
  last_name: string;
  username: string;
  phone: string;
  referrer?: string;
  password: string;
  confirm_password: string;
  pin: string;
  auth_id: string;
}

export interface Login {
  email: string;
  password: string;
  otp: string;
  steps: "login" | "otp" | "pin";
  pin?: string;
  auth_id: string;
}

export interface ForgotPassword {
  email: string;
  otp: string;
  password: string;
  confirm_password: string;
  steps: "forgot-password" | "otp" | "new-password";
}
