// thuc thi hanh dong
// tu tu giai thich luon
//hjc thieu 1 buoc
//ne nha
const reducer = (state = [], action) => {
    //state là cái kho để lưu sản phẩm, ban đầu là []
    //action là cái hành động mà mình chọn
    let done = false;
    switch (action.type) {
        //click add
        case "addCartItem":
            // console.log(state);
            // console.log(action.payload);
            //nếu state khác rỗng thì kiểm tra sản phẩm vừa thêm đã có ttrogn giỏ hàng chưa
            if (state != []) {
                state.map((item, index) => {
                    //kiểm tra bằng so sánh id, item._id là cái trong giỏ hàng(tên _id là do tui đặt để phân biệt với cái id của sp mik vừa add)
                    if (item._id === action.payload.product_id) {
                        //action.payload là sản phẩm mik vừa click add vào giỏ
                        //nếu sản phẩm đã có trong giỏ thì done=true và cập nhật số lượng cho sản phẩm đó
                        done = true;
                        console.log(item);
                        if (item.avaiableQuantity > action.quantity) {
                            state[index].quantity = state[index].quantity + action.quantity;
                            state[index].avaiableQuantity = state[index].avaiableQuantity - action.quantity;
                        } else {
                            console.log("out of stock");
                        }

                        return state;
                    }
                });
            }
            //nếu chưa có sản phẩm đó trong giỏ thì done = false và sẽ thực hiện câu lệnh bên dưới
            if (!done) {
                // add sản phẩm đó vào giỏ
                return [
                    //lệnh này để add
                    ...state,
                    {
                        //này do mình đặt tên nha, đây là sản phẩm trong giỏ hàng
                        // action.payload bên kia mình truyền vào cái gì thì lấy ra ở đây
                        //gọi mấy cái tên này ở giỏ hàng nè 
                        // hiểu hum hiểu á. cái bên giỏ hamfgh gọi mấy cái này đúng k,ukm
                        _id: action.payload.product_id,
                        category: action.payload.category_name,
                        brand: action.payload.brand_name,
                        description: action.payload.product_detail,
                        image: action.payload.product_image,
                        price: action.payload.listed_price,
                        title: action.payload.product_name,
                        avaiableQuantity: action.payload.store_qty,
                        quantity: action.quantity, //sao nay k có payload haha nhanh mắt đấy
                        // cái này tui không có truyền lên payload mà truyền thẳng biến luôn nè
                        ///bên payload còn cái j thì mik thêm tiếp ở đây, do cái link api của mik chỉ có nhiêu đây dữu liệu nên làm tạm nhiêu đây.
                    },
                ];
            }
        case "removeCartItem":
            return state.filter((item) => item._id !== action.payload);

        case "increaseQuantity":
            if (action.payload.type === "increase") {
                state.map((item, index) => {
                    if (item._id === action.payload.id) {
                        return (state[index].quantity = state[index].quantity + 1);
                    }
                });
            }

        case "decreaseQuantity":
            if (action.payload.type === "decrease") {
                state.map((item, index) => {
                    if (item._id === action.payload.id) {
                        return (state[index].quantity = state[index].quantity - 1);
                    }
                });
            }
        case "emptyCart":
            if (action.payload === "empty") {
                state.splice(0, state.length);
                return state;
            }

        default:
            return state;
    }
};

export default reducer;

