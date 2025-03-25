import Image from "next/image";
import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "POWER TOOL",
      icon: "/categories/power.png",
    },
    {
      title: "HAND TOOL",
      icon: "/categories/hand.png",
    },
    {
      title: "SAFETY ITEMS",
      icon: "/categories/safety.png",
    },
    {
      title: "BUILDING MATERIAL",
      icon: "/categories/building.png",
    },
    {
      title: "PLUMBING ELECTRICAL",
      icon: "/categories/plumbing.png",
    },
    {
      title: "LUBE TOOLS",
      icon: "/categories/lube.png",
    },
    {
      title: "PACKING MATERIAL",
      icon: "/categories/packing.png",
    },
    {
      title: "LIFTING MATERIAL",
      icon: "/categories/lifting.png",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h6 className="font-medium text-xl">Popular Categories</h6>
        {/* <p className="text-brand-darkgrey text-xs cursor-pointer">View All</p> */}
      </div>
      <div className="flex gap-3 justify-between overflow-x-scroll no-scrollbar">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1 px-2 py-3 bg-brand-yellow min-w-25 md:min-w-36 max-w-36 rounded-xl cursor-pointer"
          >
            <Image
              src={category.icon}
              alt="icon"
              width={50}
              height={50}
              className="w-8 md:w-10"
            />
            <h6 className="text-center text-[8px] md:text-[12px]">
              {category.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
