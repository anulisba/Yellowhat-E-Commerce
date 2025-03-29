import React from "react";
import ProductCard from "../common/product_card";

const WeeklyDeals = () => {
  return (
    <div className="flex flex-col py-8 px-5 bg-brand-lightgrey w-full rounded-2xl gap-8">
      <h6 className="font-semibold text-xl">Best Weekly Deals</h6>
      <div className="grid md:grid-cols-2 lg:grid-cols-10 gap-5">
        <div className="col-span-12 lg:col-span-2 flex flex-col xs:flex-row lg:flex-col gap-3">
          <ProductCard />
          <ProductCard />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ProductCard />
        </div>
        <div className="col-span-12 lg:col-span-2 flex flex-col xs:flex-row lg:flex-col gap-3">
          <ProductCard />
          <ProductCard />
        </div>
        <div className="col-span-12 lg:col-span-2 flex flex-col xs:flex-row lg:flex-col gap-3">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <button className="px-5 py-3 rounded-4xl bg-white w-fit mx-auto cursor-pointer dark:text-black">
        See All Products
      </button>
    </div>
  );
};

export default WeeklyDeals;
