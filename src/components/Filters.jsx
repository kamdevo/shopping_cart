import { useState, useId } from "react";
import { useFilters } from "../hooks/useFilters";
export const Filters = () => {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">All</option>
          <option value="men's clothing">men's clothings</option>
          <option value="women's clothing">women's clothing</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
        </select>
      </div>

      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
    </section>
  );
};
