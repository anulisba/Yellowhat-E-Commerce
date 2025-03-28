"use client";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface FilterStateContextType {
  isOpen: boolean;
  filterOpenHandler: Dispatch<SetStateAction<boolean>>;
}

export const FilterStateContext = createContext<FilterStateContextType>({
  isOpen: false,
  filterOpenHandler: () => {},
});

const FilterButtonProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <FilterStateContext.Provider
      value={{ isOpen, filterOpenHandler: setIsOpen }}
    >
      {children}
    </FilterStateContext.Provider>
  );
};

export default FilterButtonProvider;
