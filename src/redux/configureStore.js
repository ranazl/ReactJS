import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducer from "./";

export const store = createStore(AppReducer, applyMiddleware(thunk));
