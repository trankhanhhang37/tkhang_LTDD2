// này là mấy dispatch hành động tương tác với giỏ hàng
// có mấy hành động?
// thêm x sp
// xóa 1 sp
// tawng +1 sl
//tru -1 sl
//xoa toan bo gio hang

export const addCartItem = (product, _quantity) => {
    return (dispatch) => {
      dispatch({ type:"addCartItem", payload: product , quantity: _quantity});
      //nó nè okils tui cũng nghĩ v kk
      //tại vì cái cụm product kia sao bỏ sl dô đó được, nó kỳ oki
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

//mấy này chờ bà làm cái giao diện giở hàng r ms làm tiếp, chưa có nút tăng sl với nút xóa oki

