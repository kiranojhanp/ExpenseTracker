import { userLoginReducer } from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default rootReducer;
