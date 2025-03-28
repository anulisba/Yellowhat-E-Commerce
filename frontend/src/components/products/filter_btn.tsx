"use client";
import { FilterStateContext } from "@/context/filterbtn";
import React, { useContext } from "react";

const FilterBtn = () => {
  const { isOpen, filterOpenHandler } = useContext(FilterStateContext);
  return (
    <button
      onClick={() => filterOpenHandler(true)}
      className="px-3 py-1 border border-brand-lightgrey rounded-md lg:hidden"
    >
      filters
    </button>
  );
};

export default FilterBtn;
