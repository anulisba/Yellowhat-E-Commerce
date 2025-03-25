import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 pb-8 lg:pb-10">
      <div className="hidden lg:grid grid-cols-4">
        <div className="flex items-center gap-3 border-r border-brand-lightgrey">
          <Image
            src="/footer/shipping.png"
            alt="shipping"
            width={20}
            height={10}
            className="h-[1rem] w-[1rem]"
          />
          <p>FREE SHIPPING OVER $99</p>
        </div>
        <div className="flex items-center gap-3 border-r border-brand-lightgrey pl-10">
          <Image
            src="/footer/return.png"
            alt="shipping"
            width={20}
            height={10}
            className="h-[1rem] w-[1rem]"
          />
          <p>30 DAYS MONEY BACK</p>
        </div>
        <div className="flex items-center gap-3 border-r border-brand-lightgrey pl-10">
          <Image
            src="/footer/secure.png"
            alt="shipping"
            width={20}
            height={10}
            className="h-[1rem] w-[1rem]"
          />
          <p>100% SECURE PAYMENT</p>
        </div>
        <div className="flex items-center gap-3 pl-10">
          <Image
            src="/footer/support.png"
            alt="shipping"
            width={20}
            height={10}
            className="h-[1rem] w-[1rem]"
          />
          <p>24/7 DEDICATED SUPPORT</p>
        </div>
      </div>
      <div className="w-full border-b border-brand-lightgrey"></div>
      <div className="grid md:grid-cols-3 gap-10 md:gap-0">
        <div className="order-3 md:order-1 flex flex-col gap-5 md:gap-10">
          <Image src="/logo.png" alt="logo" width={200} height={20} />
          <div>
            <p className="text-sm">HOTLINE 24/7</p>
            <h6 className="font-bold text-xl">+971 56 5020 323</h6>
            <h6 className="font-bold text-xl">+971 56 5020 324</h6>
            <p className="text-sm">
              257 Thatcher Road St, Brooklyn, Manhattan,
            </p>
            <p className="text-sm">NY 10092</p>
            <p className="text-sm">sales@yellowhat.ae</p>
          </div>
          <div className="flex gap-3">
            <div className="flex justify-center items-center px-5 h-11 rounded-4xl border border-brand-lightgrey">
              i
            </div>
            <div className="flex justify-center items-center px-5 h-11 rounded-4xl border border-brand-lightgrey">
              i
            </div>
            <div className="flex justify-center items-center px-5 h-11 rounded-4xl border border-brand-lightgrey">
              i
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col md:items-center gap-5 md:gap-10">
          <h6 className="text-lg font-medium">Top Categories</h6>
          <div className="flex flex-col gap-2 text-brand-darkgrey">
            <p>Power Tool</p>
            <p>Hand Tool</p>
            <p>Safety Items</p>
            <p>Lube Tools</p>
            <p>Packing materials</p>
          </div>
        </div>
        <div className="order-2 md:order-3 flex flex-col md:items-center gap-5 md:gap-10">
          <h6 className="text-lg font-medium">Company</h6>
          <div className="flex flex-col gap-2 text-brand-darkgrey">
            <p>About</p>
            <p>Terms & conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
