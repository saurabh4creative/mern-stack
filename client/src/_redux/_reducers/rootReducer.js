import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import userReducer from "./userReducer";

const RootReducer = combineReducers({
    registerReducer, userReducer
})

export default RootReducer;