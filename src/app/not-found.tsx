import Link from "next/link";
import React from "react";
import { IoRocket } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-dvh gap-2">
      <IoRocket size={60} color="#C79101" className="animate-pulse" />
      <p className="font-medium text-center">Looks like you&apos;re lost.</p>
      <Link
        href={"/home"}
        className="bg-[#C79101] text-sm font-medium text-white py-2 px-4 rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
