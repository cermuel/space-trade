"use client";
import { constants } from "@/constants";
import React from "react";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <ul
      style={{
        backdropFilter: "blur(20px)",
        boxShadow: "0px 4px 20px 0px #0000002E",
      }}
      className="flex w-full justify-center gap-1 items-end md:hidden fixed bottom-0 left-0 py-3.5"
    >
      {constants.NAV_LINKS.map((link) => {
        return <NavLink link={link} key={link.title} />;
      })}
    </ul>
  );
};

export default Footer;
