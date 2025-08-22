import React from "react";
import { ButtonProps } from "../../../types/components/shared";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ loading, title, className = "", ...rest }: ButtonProps) => {
  return (
    <button
      className={`w-full flex items-center justify-center bg-[#C79101] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer rounded-[10px] py-3.5 text-sm text-white font-medium duration-300 transition-all ${className}`}
      {...rest}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin size-4.5" />
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
