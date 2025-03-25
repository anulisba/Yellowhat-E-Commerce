import React from "react";
import ProductCard from "../common/product_card";

const SuggestToday = () => {
  return (
    <div className="w-full flex flex-col gap-5 mt-6">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold text-2xl">Suggest Today</h6>
        <button className="text-sm cursor-pointer">VIEW ALL</button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default SuggestToday;
