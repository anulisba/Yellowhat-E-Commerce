import ProductCard from "@/components/common/product_card";
import Image from "next/image";
import React from "react";

const Products = async (props: {
  searchParams?: Promise<{
    price?: string;
    brands?: string;
  }>;
}) => {
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
  const searchParams = await props.searchParams;

  return (
    <div className="py-16 flex flex-col gap-10">
      {/* categories */}
      <div className="flex gap-3 w-full overflow-x-scroll no-scrollbar">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1 px-2 py-3 bg-brand-yellow min-w-36 max-w-36 rounded-xl cursor-pointer"
          >
            <Image src={category.icon} alt="icon" width={50} height={50} />
            <h6 className="text-center">{category.title}</h6>
          </div>
        ))}
      </div>
      {/* products & filters */}
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-1 flex flex-col gap-5">
          <div className="py-3 border-b border-b-brand-lightgrey">
            <span className="text-2xl">Filters</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl">Price</span>
            <p className="text-text-grey">Price $600 - $1200</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Brands</span>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="checkbox" name="brands" id="brand" />
                <label htmlFor="brand">Brand</label>
              </div>
            </div>
          </div>
        </div>
        {/* products listing */}
        <div className="col-span-5 grid grid-cols-4 gap-3">
          {[1, 2, 3, 4, 5].map((product) => (
            <div key={product} className="w-62">
              <ProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
