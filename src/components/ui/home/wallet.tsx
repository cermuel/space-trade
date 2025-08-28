"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import CurrencyDropdown from "./currency-dropdown";
import { useGetAppQuery } from "@/services/app/appApiSlice";
import { constants } from "@/constants";

const Wallet = () => {
  const { data } = useGetAppQuery({});
  const [showBalance, setShowBalance] = useState(true);

  const app = data ?? constants.DUMMY_APP;
  return (
    <div
      className="rounded-[18px] w-full sm:h-[122px] h-20 relative flex items-center justify-between px-5"
      style={{
        background: "linear-gradient(99.92deg, #C79101 1.58%, #DA8115 100%)",
      }}
    >
      <Image
        src={"/images/wallet-bg.svg"}
        alt="wallet bg"
        width={500}
        height={500}
        className="w-full h-full absolute top-0 -left-1/4 opacity-10 pointer-events-none"
      />
      <Image
        src={"/images/wallet-logo.svg"}
        alt="wallet bg"
        width={100}
        height={100}
        className="sm:w-28 w-20 aspect-square absolute top-0 right-0 pointer-events-none"
      />
      <div>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="text-white flex items-center gap-1 font-medium text-[10px] cursor-pointer"
        >
          Wallet Balance:
          {showBalance ? (
            <IoEyeOffOutline size={16} />
          ) : (
            <IoEyeOutline size={16} />
          )}
        </button>
        <h1 className="text-white sm:text-[30px] font-bold">
          {showBalance ? `₦${app.wallet_balance}` : "*********"}
        </h1>
      </div>
      <CurrencyDropdown />
    </div>
  );
};

export default Wallet;
