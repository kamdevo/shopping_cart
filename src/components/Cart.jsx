import { CircleX, ShoppingCartIcon } from "lucide-react";
import { useId } from "react";
import "./Cart.css";
import { useCart } from "../hooks/useCart";
const CartItem = ({ quantity, image, title, price, addToCart }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>quantity: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};

export const Cart = () => {
  const cartId = useId();
  const { cart, ClearCart, AddToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartId}>
        {<ShoppingCartIcon />}
      </label>
      <input id={cartId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => AddToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={ClearCart}>{<CircleX />}</button>
      </aside>
    </>
  );
};
