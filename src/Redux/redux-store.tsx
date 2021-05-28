import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReduser";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import subReducer from "./subReducer";
import userReducer from "./userReducer";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./AppREduser";

let rootReducer = combineReducers({
  ProfilePage: profileReducer,
  DialogPage: dialogReducer,
  subscribe: subReducer,
  UsersPage: userReducer,
  auth: authReducer,
  app: AppReducer,
});

type reducersType= typeof rootReducer
export type AppStateType=ReturnType<reducersType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
      store: any
  }
}

window.store = store;
export default store;
