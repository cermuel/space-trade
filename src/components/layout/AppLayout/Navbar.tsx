"use client";
import { constants } from "@/constants";
import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav
      className="bg-[#FFF] flex w-full justify-center px-8 max-sm:px-4  max-sm:!shadow-none max-sm:backdrop-blur-none"
      style={{
        backdropFilter: "blur(20px)",
        boxShadow: "0px 4px 20px 0px #0000002E",
      }}
    >
      <div className="w-full max-w-[930px] flex items-center justify-between sm:py-4 py-4">
        <Image
          src={"/images/logo-full.svg"}
          alt="space-trade logo"
          width={140}
          height={40}
          className="h-9 max-sm:hidden"
        />
        <ul className="flex justify-center gap-1 items-end max-md:hidden">
          {constants.NAV_LINKS.map((link) => {
            return <NavLink link={link} key={link.title} />;
          })}
        </ul>
        <div className="flex gap-2 items-center max-sm:w-full max-sm:justify-between max-sm:flex-row-reverse">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/help.svg"}
              alt="search icon"
              width={40}
              height={30}
              className="h-6"
            />
            <Image
              src={"/icons/notification.svg"}
              alt="user icon"
              width={20}
              height={20}
              className="h-5"
            />
          </div>
          <div className="flex items-center">
            <div className="relative w-10 h-10 border border-white">
              <Image
                src={"/images/dummy-image.svg"}
                className={"w-full h-full rounded-full object-cover"}
                width={40}
                height={40}
                alt="user icon"
              />
              <Image
                src={"/icons/badge.svg"}
                className={
                  "w-3 h-3 absolute bottom-0.5 right-0.5 rounded-full object-cover"
                }
                width={12}
                height={12}
                alt="badge icon"
              />
            </div>

            <div>
              <p className="text-[#6B7280] text-xs">Welcome back,</p>
              <p className="text-[#C79101] text-xs font-medium flex items-center gap-0.5">
                SpaceTrade
                <Image
                  src={"/icons/verified.svg"}
                  alt="verified icon"
                  className="w-2 h-2"
                  width={8}
                  height={8}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
