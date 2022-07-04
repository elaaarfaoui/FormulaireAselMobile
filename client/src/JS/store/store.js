// import { createStore, applyMiddleware, compose } from "redux";
// import { rootReducer } from "../reducers";
// import thunk from "redux-thunk";
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   rootReducer,
//   composeEnhancer(applyMiddleware(thunk))
// );

import { applyMiddleware, compose } from "redux";
// import { legacy_createStore as createStore} from 'redux';
import { legacy_createStore } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)) )

const store = legacy_createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
