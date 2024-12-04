import { useState } from "react";
import { useFilters } from "./hooks/useFilters";
import "./App.css";
import { Products } from "./components/Products";
import Footer from "./components/Footer";
import initialProducts from "./mocks/products.json";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";
function App() {
  const [products] = useState(initialProducts);
  const { productsFiltering } = useFilters();
  const filteredProducts = productsFiltering(products);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
