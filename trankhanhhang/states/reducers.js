import { combineReducers } from "redux";
import cartReducer from "./cart_Reducer";

const reducers = combineReducers({
  product: cartReducer,
});

export default reducers;
