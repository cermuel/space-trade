import { Country } from "../types/constants";

const COUNTRIES: Country[] = [
  {
    flag: "/icons/nigeria-flag.svg",
    code: "+234",
    country: "Nigeria",
    description: "Nigerian Naira {₦}",
  },
  {
    flag: "/icons/sa-flag.svg",
    code: "+27",
    country: "South Africa",
    description: "Rand {R}",
  },
];

const REFERALL: { value: string; label: string }[] = [
  { label: "Twitter / X", value: "twitter" },
  { label: "Instagram", value: "instagram" },
  { label: "Facebook", value: "facebook" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "Google Search", value: "google" },
  { label: "Friend", value: "friend" },
  { label: "Other", value: "other" },
];

export const constants = { COUNTRIES, REFERALL };
