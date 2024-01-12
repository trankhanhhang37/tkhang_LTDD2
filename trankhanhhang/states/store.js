import { createStore, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk";
import cart_Reducer from "./reducers";

export const store = createStore(cart_Reducer,{},applyMiddleware(thunk))