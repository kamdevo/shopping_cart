import "./footer.css";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";
import { IS_DEVELOPMENT } from "../config";
function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      <h4>Kam's Shopping Cart 🛒</h4>
      <p>Shopping Cart with UseContext and UseReducer</p>
    </footer>
  );
}

export default Footer;
