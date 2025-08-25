import { constants } from "@/constants";
import Image from "next/image";
import React from "react";

const ActionSection = () => {
  return (
    <section className="my-5">
      <h2 className="text-xs font-medium">Actions:</h2>
      <ul className="w-full grid sm:grid-cols-4 grid-cols-3 gap-2.5 mt-2">
        {constants.ACTIONS.map((action, index: number) => (
          <li
            className="bg-[#F7F7F7] rounded-[10px] gap-2.5 py-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
            key={index}
          >
            <Image
              src={action.icon}
              className=""
              width={24}
              height={24}
              alt={action.title}
            />
            <p className="text-[#2D3036] text-xs">{action.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActionSection;
