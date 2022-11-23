import axios from "axios";
import ticketConstants from "../_constants/ticketConstants";
import { BASE_URL } from "../../_helpers/config";

const ticket_fetch = () => {
    return {
         type : ticketConstants.TICKET_FETCH
    }
}

const ticket_success = () => {
    return async (dispatch) => {
         axios.get(`${BASE_URL}/api/v1/tickets/all`).then((res) => {
               dispatch({
                    type : ticketConstants.TICKET_SUCCESS,
                    payload : res.data
               })
         }).catch((err)=>{
               dispatch({
                    type : ticketConstants.TICKET_FAILED,
                    payload : err.message
               })
         })
    }
}

const ticketActions = { ticket_fetch, ticket_success }

export default ticketActions