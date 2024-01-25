//setup
//nay nhu cai kho luu tru e
import { createStore, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk";
import cart_Reducer from "./reducers";

export const store = createStore(cart_Reducer,{},applyMiddleware(thunk))