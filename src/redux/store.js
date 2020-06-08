import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  users: userReducer
});
export const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);
