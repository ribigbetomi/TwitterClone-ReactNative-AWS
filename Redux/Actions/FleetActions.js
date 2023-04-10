// ADD TO CART
export const addToCart = (id, qty) => async (dispatch) => {
  const { data } = await axios.get(`${url}/api/products/${id}`);

  // console.log(data);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
