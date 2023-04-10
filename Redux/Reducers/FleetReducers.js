export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(
            (x) => (x.product === existItem.product ? item : x)
            // (x) => {
            //   let newQty = Number(existItem.qty) + Number(item.qty);
            //   return x.product === existItem.product
            //     ? { ...existItem, qty: newQty }
            //     : x;
            // }
          ),
        };
      } else {
        return {
          // ...state,
          // cartItems: state.cartItems.filter(
          //   (x) => x.product !== action.payload
          // ),
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
