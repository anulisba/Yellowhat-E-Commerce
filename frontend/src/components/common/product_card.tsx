import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full h-full flex flex-col py-3 bg-white rounded-md cursor-pointer border border-brand-lightgrey">
      <div className="relative w-full min-h-52 h-full flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="product"
          // fill
          // sizes="100%,100%"
          width={100}
          height={100}
          className="object-contain w-2/3"
        />
      </div>
      <div className="flex flex-col px-5 py-3 gap-3 bg-gradient-to-b from-transparent via-black/25 to-transparent">
        <div className="px-2 py-1 bg-brand-darkgrey rounded-4xl w-fit">
          <p className="text-yellow-500 text-xs">15% OFF</p>
        </div>
        <h5 className="font-semibold">Air Purifier withTrue HEPA H14 Filter</h5>
      </div>
      <h6 className="px-5">$489.00</h6>
    </div>
  );
};

export default ProductCard;
