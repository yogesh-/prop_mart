"use client";
import Image from "next/image";
import { useState } from "react";

const FilterBar = ({ filter, setFilter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const filters = [
    { text: "All Filters", icon: "/icons/filter.png" },
    { text: "Verified", icon: "/icons/verified.png" },
    { text: "Sort By", icon: "/icons/sort.png" },
    { text: "With Images", icon: "/icons/images.png" },
    { text: "Hide ShortListed", icon: "/icons/shortlisted.png" },
  ];

  // const handleFilterClick = (index) => {
  //   if (index === 1) {
  //     setFilter(!filter);
  //   }
  // };

  return (
    <div className="h-16 flex flex-row items-center gap-2 overflow-x-auto px-4 no-scrollbar border-b-2 border-neutral-300 mb-2 bg-neutral-200 text-black">
      {filters.map((filter, index) => (
        <div
          key={index}
          className="flex flex-row flex-nowrap items-center rounded-full h-8 border-2 border-neutral-300 pl-1 pr-6 cursor-pointer bg-white"
          style={{ width: `auto` }}
          // onClick={() => handleFilterClick(index)}
        >
          <img src={filter.icon} width={16} height={16} />
          <p className="whitespace-nowrap">{filter.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
