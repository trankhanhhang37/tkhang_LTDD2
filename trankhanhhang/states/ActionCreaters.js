
export const addCartItem = (product, _quantity) => {
    return (dispatch) => {
      dispatch({ type:"addCartItem", payload: product , quantity: _quantity});
    };
  };
  
  export const removeCartItem = (id) => {
    return (dispatch) => {
       dispatch({ type: "removeCartItem", payload: id });
     };
   };
  
  export const increaseCartItemQuantity = (id) => {
    return (dispatch) => {
      dispatch({ type:"increaseQuantity", payload: id });
    };
  };
  
  export const decreaseCartItemQuantity = (id) => {
    return (dispatch) => {
      dispatch({ type:"decreaseQuantity", payload: id });
    };
  };
  
  export const emptyCart = (type) => {
    return (dispatch) => {
      dispatch({ type:"emptyCart", payload: type });
    };
  };


