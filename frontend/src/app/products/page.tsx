import ProductCard from "@/components/common/product_card";
import FilterBtn from "@/components/products/filter_btn";
import FilterComponent from "@/components/products/filters";
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
  // const searchParams = await props.searchParams;

  return (
    <div className="py-8 flex flex-col gap-10">
      {/* categories */}
      <div className="flex gap-3 w-full overflow-x-scroll no-scrollbar">
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
      {/* products & filters */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <FilterBtn />
        </div>
        <div className="grid lg:grid-cols-6 gap-3">
          <FilterComponent />
          {/* products listing */}
          <div className="w-full col-span-5 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
            {[1, 2, 3, 4, 5].map((product) => (
              <div key={product} className="w-full">
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
