"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FormSelectProps } from "../../types/components/shared";
import { BiChevronDown } from "react-icons/bi";

const FormSelect = ({ label, icon, preseprator, options }: FormSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (opt: { value: string; label: string }) => {
    setSelected(opt);
    setIsOpen(false);
  };

  return (
    <div className="w-full relative">
      <label className="text-xs font-medium text-[#6B7280]">{label}</label>

      <div
        className="border border-[#F0F1F2] bg-[#FAFAFA] w-full py-3.5 px-2.5 rounded-[10px] flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {icon && (
          <Image
            src={icon}
            alt="select icon"
            width={18}
            height={18}
            className="w-4.5 h-4.5"
          />
        )}

        {preseprator && preseprator}
        {preseprator && (
          <div className="h-[18px] w-0 border-[0.5px] border-[#D1D3D8]"></div>
        )}

        {selected.icon && (
          <Image
            src={selected.icon}
            alt="select icon"
            width={18}
            height={18}
            className="w-4.5 h-4.5"
          />
        )}
        <span className="flex-1 text-xs text-[#111]">{selected.label}</span>
        <BiChevronDown
          className={`w-4 h-4 text-[#6B7280] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-[#F0F1F2] rounded-[10px] shadow-md overflow-y-scroll max-h-40">
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => handleSelect(opt)}
              className={`p-4 text-xs cursor-pointer hover:bg-[#F9FAFB] flex items-center gap-1 ${
                selected.value === opt.value ? "bg-[#F3F4F6]" : ""
              }`}
            >
              {opt.icon && (
                <Image
                  src={opt.icon}
                  alt="select icon"
                  width={18}
                  height={18}
                  className="w-4.5 h-4.5"
                />
              )}
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormSelect;
