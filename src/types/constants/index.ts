import { IconType } from "react-icons";

export interface Country {
  code: "+234" | "+27";
  country: string;
  flag: string;
  description: string;
}
export interface NavLink {
  icon: IconType;
  url: string;
  title: string;
}

export interface Action {
  icon: string;
  title: string;
}
