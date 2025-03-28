"use client";
import { FilterStateContext } from "@/context/filterbtn";
import React, { useContext } from "react";

const FilterComponent = () => {
  const { isOpen, filterOpenHandler } = useContext(FilterStateContext);
  return (
    <div
      className={`col-span-1 lg:flex flex-col gap-5
            ${
              isOpen
                ? "fixed lg:relative top-0 h-dvh bg-white px-5 w-2/3 z-10"
                : "hidden"
            }
            `}
    >
      <div className="flex justify-between items-center py-3 border-b border-b-brand-lightgrey">
        <span className="text:sm lg:text-2xl">Filters</span>
        <button onClick={() => filterOpenHandler(false)}>X</button>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm lg:text-xl">Price</span>
        <p className="text-text-grey text-sm">Price $600 - $1200</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm lg:text-xl">Brands</span>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="brands"
              id="brand"
              className="mt-1.5"
            />
            <label htmlFor="brand" className="text-sm">
              Brand
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
