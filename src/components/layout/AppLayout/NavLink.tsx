"use client";
import type { NavLink } from "@/types/constants";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: { link: NavLink }) => {
  const pathname = usePathname();
  const Icon = link.icon;
  const activeRoute = link.url === pathname;
  return (
    <Link
      href={link.url}
      className={`flex flex-col items-center justify-center w-20 gap-0.5 ${
        activeRoute ? "text-[#C79101]" : "text-[#BBBEC5]"
      }`}
    >
      <Icon size={18} />
      <p className="text-xs">{link.title}</p>
    </Link>
  );
};

export default NavLink;
