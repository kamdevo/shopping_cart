import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export const useFilters = () => {
	/* const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  }); */

	const { filters, setFilters } = useContext(FiltersContext);
	console.log(filters);

	//PRIMORDIAL - PRODUCTS FILTERING LOGIC
	const productsFiltering = (products) => {
		return products.filter((product) => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === "all" || product.category === filters.category)
			);
		});
	};

	return { filters, productsFiltering, setFilters };
};
