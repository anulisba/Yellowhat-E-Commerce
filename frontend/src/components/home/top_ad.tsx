import Image from "next/image";
import React from "react";

const TopAdvertisement = () => {
  return (
    <div className="w-full h-72 lg:h-96">
      <div className="relative w-full bg-brand-lightgrey h-full rounded-2xl cursor-pointer overflow-hidden">
        <Image
          src="/ad_demo.jpeg"
          alt="advertisement"
          width={200}
          height={100}
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
};

export default TopAdvertisement;
