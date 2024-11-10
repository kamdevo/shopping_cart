import "./header.css";

import { Filters } from "./Filters";

export const Header = ({ changeFilters }) => {
  return (
    <header>
      <h1>My prototype React shop 🛒 - By Kam</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
};
