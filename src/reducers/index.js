import { combineReducers } from "redux";

import userReducer from "./userReducers";

const reducers = combineReducers({
  userLogin: userReducer,
});

export default reducers;
