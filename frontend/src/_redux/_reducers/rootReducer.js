import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import registerReducer from "./registerReducer";
import ticketReducer from "./ticketReducer";
import userReducer from "./userReducer";

const RootReducer = combineReducers({
    registerReducer, userReducer, projectReducer, ticketReducer
})

export default RootReducer;