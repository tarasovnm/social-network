import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reduceds = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reduceds, applyMiddleware(thunkMiddleware));

export default store;