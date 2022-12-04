import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import registerReducer from "./registerReducer";
import ticketReducer from "./ticketReducer";
import userReducer from "./userReducer";
import dashboardReducer from "./dashboardReducer";
import boardReducer from "./boardReducer";


const RootReducer = combineReducers({
    registerReducer, userReducer, projectReducer, ticketReducer, dashboardReducer, boardReducer
})

export default RootReducer;