import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import article from "./article";
import tag from "./tag";

export default combineReducers({ user, auth, article, tag });
