import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-dvh flex max-md:flex-col max-md:items-center max-md:justify-center max-md:p-5 max-sm:p-0 bg-[#C79101]">
      <div className="w-[44%] h-full max-md:hidden relative overflow-hidden py-8 px-24 flex flex-col text-white">
        <Image
          width={180}
          height={100}
          src={"/icons/auth-pattern-top.svg"}
          alt="auth-pattern icon"
          className="absolute -top-4 -right-10 w-40 h-32"
        />
        <Image
          width={180}
          height={100}
          src={"/icons/auth-pattern-bottom.svg"}
          alt="auth-pattern icon"
          className="absolute -bottom-4 -left-10 w-40 h-32"
        />
        <Image
          width={600}
          height={610}
          src={"/images/auth-image.svg"}
          alt="auth-image"
          className="absolute bottom-0 -right-40 w-auto pointer-events-none h-auto scale-150"
        />
        <Image
          width={92}
          height={88}
          src={"/images/logo.svg"}
          alt="logo icon"
          className="w-20 h-18"
        />
        <div className="w-full mt-20">
          <p className="text-[30px] font-bold">
            Trade giftcards, crypto & pay bills all in one place
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.getspacetrade.app"
              }
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                width={135}
                height={40}
                src={"/icons/google.svg"}
                alt="google icon"
                className="w-[110px]"
              />
            </Link>
            <Link
              href={"https://apps.apple.com/ng/app/spacetrade/id6459020574"}
              target="_blank"
            >
              <Image
                width={135}
                height={40}
                src={"/icons/apple.svg"}
                alt="apple icon"
                className="w-[110px]"
              />
            </Link>
          </div>
        </div>
        <span className="text-sm mt-auto">Copyright 2024</span>
      </div>
      <Image
        width={180}
        height={100}
        src={"/icons/auth-pattern-top.svg"}
        alt="auth-pattern icon"
        className="absolute -top-4 -right-10 w-40 h-32  md:hidden max-sm:hidden"
      />
      <Image
        width={180}
        height={100}
        src={"/icons/auth-pattern-bottom.svg"}
        alt="auth-pattern icon"
        className="absolute -bottom-4 -left-10 w-40 h-32  md:hidden max-sm:hidden"
      />
      <Image
        width={92}
        height={88}
        src={"/images/logo.svg"}
        alt="logo icon"
        className="w-20 h-18 mb-auto mr-auto md:hidden max-sm:hidden"
      />
      <div className="md:w-[56%] w-full md:h-full max-md:rounded-[30px] max-sm:rounded-none max-md:h-[75%] max-sm:h-full max-sm:px-0 max-sm:py-5 p-10 bg-[#FFF] flex flex-col sm:justify-center items-center">
        <Image
          width={100}
          height={30}
          src={"/images/logo-full.svg"}
          alt="logo icon"
          className="h-8 w-full sm:hidden"
        />
        <div className="w-full max-w-[450px] max-sm:flex-1 flex flex-col overflow-y-scroll pt-2">
          {children}
        </div>
      </div>
      <span className="text-sm mt-auto text-white md:hidden max-sm:hidden">
        Copyright {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default AuthLayout;
