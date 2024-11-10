import { useState } from "react";
import { useFilters } from "./hooks/useFilters";
import "./App.css";
import { Products } from "./components/Products";
import Footer from "./components/Footer";
import initialProducts from "./mocks/products.json";
import { Header } from "./components/Header";
function App() {
  const [products] = useState(initialProducts);
  const { productsFiltering, setFilter } = useFilters();
  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={productsFiltering(products)} />
      <Footer />
    </>
  );
}

export default App;
