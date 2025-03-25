import { Moon, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center gap-3 border-b border-b-brand-lightgrey pb-8">
      <div className="relative w-[196px] lg:w-[269px] h-[34px] lg:h-[48px]">
        <Image src="/logo.png" alt="logo" fill sizes="100%,100%" className="" />
      </div>
      <div className="relative w-96">
        <input
          type="text"
          className="outline-none rounded-4xl ps-4 pe-14 py-3 border border-brand-lightgrey w-full"
          placeholder="search anything..."
        />
        <button className="absolute bg-brand-darkgrey top-1/2 -translate-y-1/2 right-1 p-3 rounded-4xl cursor-pointer">
          <Search color="white" size={18} strokeWidth={3} />
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
