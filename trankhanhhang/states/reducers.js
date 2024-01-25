import { combineReducers } from "redux";
import cartReducer from "./cart_Reducer";

const reducers = combineReducers({
  //ví dụ mình muốn tạo 1 cái kho khác thì làm tương tự
  product: cartReducer,
});

export default reducers;
