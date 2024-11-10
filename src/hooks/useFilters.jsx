import { useState } from "react";

export const useFilters = () => {
  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  //PRIMORDIAL - PRODUCTS FILTERING LOGIC
  const productsFiltering = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { productsFiltering, setFilter };
};
