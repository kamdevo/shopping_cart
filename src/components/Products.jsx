import { AddToCartIcon } from "./Icons";
import { Trash2Icon } from "lucide-react";
import { CartContext } from "../context/cart";
import { useContext } from "react";

export const Products = ({ products }) => {
  const { AddToCart, cart, removeProductFromCart } = useContext(CartContext);
  const checkProductInCart = (product) => {
    return cart.some((cartProduct) => cartProduct.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong>
                  {product.title} - ${product.price}
                </strong>
              </div>
              <div>
                <button
                  className={isProductInCart ? "remove" : "add"}
                  onClick={() =>
                    isProductInCart
                      ? removeProductFromCart(product)
                      : AddToCart(product)
                  }
                >
                  {isProductInCart ? <Trash2Icon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
