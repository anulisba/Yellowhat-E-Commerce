"use client";
import { Moon, Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full flex justify-between items-center gap-3 border-b border-b-brand-lightgrey pb-6">
      <div className="relative w-[50px] md:w-[269px] h-[34px] lg:h-[48px]">
        <Image
          src={screenWidth > 767 ? "/logo.png" : "/logo-symbol.png"}
          alt="logo"
          fill
          sizes="100%,100%"
          className=""
        />
      </div>
      <div className="relative w-3/4 md:w-96">
        <input
          type="text"
          className="outline-none rounded-4xl ps-4 pe-14 py-1.5 pb-1 md:pb-4 md:py-3 border border-brand-lightgrey w-full"
          placeholder="search anything..."
        />
        <button className="absolute bg-brand-darkgrey top-1/2 -translate-y-1/2 right-0.5 md:right-1 p-3 rounded-4xl cursor-pointer">
          <Search
            color="white"
            strokeWidth={3}
            className="w-[10px] h-[10px] md:w-[18px] md:h-[18px]"
          />
        </button>
      </div>
      <div className="lg:flex flex-col gap-0 hidden">
        <p className="m-0 text-[12px]">Hotline 24/7</p>
        <h6 className="m-0 text-brand-darkgrey">+971 2 642 2298</h6>
      </div>
      <div className="flex">
        <Moon className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
