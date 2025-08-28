"use client";
import { useState } from "react";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { constants } from "@/constants";

const CurrencyDropdown = () => {
  const [selected, setSelected] = useState(constants.CURRENCIES[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-0.5 cursor-pointer bg-[#8D6701] w-15 h-6.5 px-1 rounded-md border border-[#D2A734] text-white"
      >
        <Image
          src={selected.flag}
          alt={selected.code}
          width={14}
          height={11}
          className="h-2.5"
        />
        <span className="text-[10px]">{selected.code}</span>
        <BiChevronDown
          size={20}
          className={`transition-all duration-300 ${open && "rotate-180"}`}
        />
      </button>

      {open && (
        <div className="absolute mt-1 w-20 rounded-md shadow-lg bg-white border border-gray-200 z-10">
          <ul className="py-1">
            {constants.CURRENCIES.map((cur) => (
              <li key={cur.code}>
                <button
                  onClick={() => {
                    setSelected(cur);
                    setOpen(false);
                  }}
                  className="flex items-center gap-1 px-2 py-1 w-full hover:bg-gray-100 text-sm cursor-pointer"
                >
                  <Image
                    src={cur.flag}
                    alt={cur.code}
                    width={14}
                    height={14}
                    className="h-3.5"
                  />
                  <span className="text-xs">{cur.code}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
