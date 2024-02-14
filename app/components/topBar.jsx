"use client";
import React, { useState } from "react";
import Image from "next/image";

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("handleSearch called");
  };
  return (
    <div className="flex flex-row items-center justify-between w-full h-20 bg-green-100 gap-2">
      <div className="flex items-center pl-8 sm:pl-20 gap-4 w-full sm:w-1/2">
        <Image
          className="hidden sm:block"
          src="/logo1.png"
          width={105}
          height={31}
        />
        <Image
          className="sm:hidden"
          src="/hamburger.svg"
          width={24}
          height={24}
        />

        <form onSubmit={handleSearch} className="relative flex-grow">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for location"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="border-2 border-gray-300 bg-white h-11 px-5 pr-10 rounded-full text-sm focus:outline-none pl-9 w-full"
            />
            <button className="absolute left-0 top-0 mt-3 ml-4">
              <Image
                src="/search.svg"
                width={64}
                height={64}
                className="h-4 w-4"
              />
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center pr-8 sm:pr-20 sm:gap-4 sm:w-1/2 justify-end">
        <Image
          className="hidden sm:block"
          src="/phone.svg"
          width={48}
          height={48}
        />
        <p className="font-bold hidden sm:block">+91 1234567890</p>

        <div class="h-12 w-12 rounded-full border-2 border-neutral-300 flex items-center justify-center">
          <span class="text-2xl font-bold">A</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
