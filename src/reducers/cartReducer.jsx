export const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];
export const cartReducer = (state, action) => {
  const updateLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case "ADD_TO_CART":
      const cartProductIndex = state.findIndex(
        (cartProduct) => cartProduct.id === actionPayload.id
      );

      if (cartProductIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[cartProductIndex].quantity += 1;
        updateLocalStorage(newCart);
        return newCart;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);
      return newState;

    case "REMOVE_FROM_CART":
      const { id } = actionPayload;
      const newSate = state.filter((item) => item.id !== id);
      updateLocalStorage(newSate);

    case "CLEAR_CART":
      return [];
      updateLocalStorage([]);
  }

  return state;
};
