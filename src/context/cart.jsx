import { createContext, useState, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cartReducer";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const AddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeProductFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const ClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        AddToCart,
        ClearCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
