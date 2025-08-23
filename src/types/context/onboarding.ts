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
}
