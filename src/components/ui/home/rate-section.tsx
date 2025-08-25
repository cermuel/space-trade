"use client";
import { constants } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import Rate from "./rate";

const RateSection = () => {
  const [rates, setRates] = useState(constants.DUMMY_RATES);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!listRef.current) return;

      const list = listRef.current;

      const itemWidth = list.children[0]?.clientWidth || 0;
      list.scrollBy({ left: itemWidth + 20, behavior: "smooth" });

      if (list.scrollLeft + list.clientWidth >= list.scrollWidth - 5) {
        setTimeout(() => {
          setRates((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
          });
          list.scrollTo({ left: 0, behavior: "auto" });
        }, 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-5">
      <h2 className="text-xs font-medium">Rates:</h2>
      <ul
        ref={listRef}
        className="flex overflow-x-scroll gap-5 items-center scroll-smooth no-scrollbar mt-2"
      >
        {rates.map((rate) => (
          <Rate rate={rate} key={rate.id} />
        ))}
      </ul>
    </section>
  );
};

export default RateSection;
