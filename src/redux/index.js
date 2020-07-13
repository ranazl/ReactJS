import { combineReducers } from "redux";

import * as rootReducer from "./reducers";

const AppReducer = combineReducers({
  rootReducer: rootReducer.rootReducer,
});
export default AppReducer;
