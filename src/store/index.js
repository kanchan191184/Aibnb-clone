import { createStore } from "redux";

import reducers from "../reducers/index";

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const configureStore = () => {
//   return createStore(rootReducer);
// };

// export default configureStore;

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
