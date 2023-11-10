import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export function useCarContext() {
  return useContext(CarContext);
}

export function CarProvider({ children }) {
  const [filterCard, setFilterCard] = useState([]);

  const handleFilter = (filterCard) => {
    setFilterCard(filterCard);
  };
}
